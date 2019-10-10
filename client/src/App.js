import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import CategoryPledges from './components/CategoryPledges'


const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/dashboard/action-category' component={CategoryPledges} />
    </React.Fragment>
  </Router>
)

export default App
