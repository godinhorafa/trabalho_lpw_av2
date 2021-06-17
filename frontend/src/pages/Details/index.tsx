import React, { useState, useEffect } from 'react'
import { useRouteMatch } from 'react-router-dom'
import api from '../../services/api'
import { Container, Descricao } from './styles'

interface ClientsParametros {
  cliente: string
}

interface Cadastro {
  cliente: string;
  telefone: string;
  email: string;
}

const Details: React.FC = () => {
  const { params } = useRouteMatch<ClientsParametros>()

  const [clients, setClients] = useState<Cadastro[]>([])

  useEffect(() => {
    api.get('/clients').then(response => setClients(response.data))
  }, [])

  let detalhesCliente = []
  detalhesCliente = clients.filter(user => user.cliente === params.cliente)
  console.log(detalhesCliente)
  return (
    <Container>
      <Descricao>
        <ul>
          {detalhesCliente.map((user, index) =>
            <li key={index}>
              <span>Cliente: {user.cliente}</span>
              <span>Telefone: {user.telefone}</span>
              <span>Email: {user.email}</span>
            </li>
          )}
        </ul>
      </Descricao>
    </Container>
  )
}

export default Details

// CRUD - CREATE / READ - UPDATE / DELETE
