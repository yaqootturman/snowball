import './App.css';
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'


const App = () => {

  return (


    <div className="App">

      <Router>
        <React.Fragment>
          <Route exact path='/' component={ LandingPage } />
        </React.Fragment>
      </Router>

    </div>
  );
}

export default App
