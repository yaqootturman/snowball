import './App.css';
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import LandingPage from "./components/LandingPage"
import DashboardPage from './components/DashboardPage'
import CategoryPledges from './components/CategoryPledges'


const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exact path="/" component={LandingPage} />
        <Route path='/dashboard/action-category/:category_id' component={CategoryPledges} />
      </Switch>
    </React.Fragment>
  </Router>
)
export default App
