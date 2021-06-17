import { getCustomRepository } from 'typeorm'
import { ClientsRepository } from '../repositories/ClientsRepository'

interface IClientsCreate {
  cliente: string; 
  telefone: string;
  email: string;
}

interface IClientsShow {
  id: string
}

interface IClientsUpdate {
  id: string;
  cliente: string; 
  telefone: string;
  email: string;
}

class ClientsServices {

  async create({ cliente, telefone, email }: IClientsCreate) {

    const clientsRepository = getCustomRepository(ClientsRepository)

    const clientes = clientsRepository.create({
      cliente,
      telefone,
      email
    })

    await clientsRepository.save(clientes)

    return clientes
  }

  async index() {
    const clientsRepository = getCustomRepository(ClientsRepository)

    const clientes = await clientsRepository.find()

    return clientes;
  }

  //async show({ id: string }) {
  async show({ id }: IClientsShow) {
    const clientsRepository = getCustomRepository(ClientsRepository)

    const clientes = await clientsRepository.findOne({ id })

    console.log(clientes)

    if (!clientes) {
      throw new Error('User id not found!!')
    }

    return clientes;
  }

  async delete({ id }: IClientsShow) {
    const clientsRepository = getCustomRepository(ClientsRepository)

    const clientes = await clientsRepository.findOne({ id })

    if (!clientes) {
      throw new Error('User id not found!!')
    }

    return await clientsRepository.delete({ id })
  }

  async update({ id, cliente, telefone, email }: IClientsUpdate) {
    const clientsRepository = getCustomRepository(ClientsRepository)

    let clientes = await clientsRepository.findOne({ id })

    if (!clientes) {
      throw new Error('Teacher id not found!!')
    }

    await clientsRepository.update(
      { id },
      { cliente,
        telefone,
        email }
    )

    const clientUpdated = await clientsRepository.findOne({ id })

    return clientUpdated
  }
}

export {ClientsServices }