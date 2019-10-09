import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/HomePage'

const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
    </React.Fragment>
  </Router>
)

export default App
