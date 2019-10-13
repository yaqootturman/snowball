import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import CategoryPledges from './components/CategoryPledges'


const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route path='/dashboard/action-category/:category_id' component={CategoryPledges} />
    </React.Fragment>
  </Router>
)

export default App
