import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../../services/api'
import { Container } from './styles'

interface IListagem {
  id: string;
  cliente: string;
  telefone: string;
  email: string;
}

const Dashboard: React.FC = () => {

 const [clients, setClients] = useState<IListagem[]>([])

  useEffect(() => {
    api.get('/clients').then(response => setClients(response.data))
  }, [])
  console.log(clients)

  async function handleDelete(id: string) {
    //console.log(id)
    await api.delete(`/clients/${id}`)
    setClients(clients.filter(user => user.id !== id))
  }

  return (
    <Container>
      <ul>
        {clients.map((user, index) =>
          <li key={index.toString()}>
            <Link to={`/details/${user.cliente}`}>{user.cliente}</Link>
            <button type="button" onClick={() => handleDelete(user.id)}>Excluir</button>
            <Link to={`/new/${user.id}`}><button type="button">Alterar</button></Link>
          </li>
        )}
      </ul>
    </Container>
  )
}

export default Dashboard
