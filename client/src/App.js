import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
    </React.Fragment>
  </Router>
)

export default App
