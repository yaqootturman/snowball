import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/HomePage'
import CategoryPledges from './components/CategoryPledges'
import InformationPage from './components/InformationPage'


const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route path='/action-category/:category_id' component={CategoryPledges} />
      <Route path='/Information' component={InformationPage} />
    </React.Fragment>
  </Router>
)

export default App
