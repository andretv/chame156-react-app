import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

// containers
import Login from 'containers/login'

import './global.scss'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path='*' render={() => <Redirect to='/' />} />
      </Switch>
    </BrowserRouter>
  )
}

export default App