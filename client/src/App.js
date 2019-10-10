import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import DashboardPage from './components/DashboardPage'


const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </React.Fragment>
  </Router>
)

export default App
