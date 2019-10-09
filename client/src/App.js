import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Category from "./components/Category"
import LandingPage from "./components/LandingPage"

const App = () => (
  <Router>
    <React.Fragment>
      <Switch>
        <Route exact path="/category" component={Category} />
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </React.Fragment>
  </Router>
)

export default App
