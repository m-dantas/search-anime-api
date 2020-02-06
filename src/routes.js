import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Main from './pages/main'
import Anime from './pages/anime'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/anime/:id" component={Anime} />
    </Switch>
  </BrowserRouter>
)

export default Routes
