import React from 'react'
import { Switch, Route } from 'react-router-dom'


// / dashboard - listar os clients
// /new - novo cadastro de cliente
// /details - detalhes do cliente

import Dashboard from '../pages/Dashboard'
import New from '../pages/New'
import Details from '../pages/Details'

const Routes: React.FC = () => (
  <Switch>
    <Route path='/' exact component={Dashboard} />
    <Route path='/new/:id' component={New} />
    <Route path='/details/:cliente' component={Details} />
  </Switch>
)

export default Routes
