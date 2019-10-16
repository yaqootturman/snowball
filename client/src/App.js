import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/HomePage'
import CategoryPledges from './components/CategoryPledges'
import Congratulations from './components/CongratulationsPage'


const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route path='/congratulations' component={Congratulations} />
      <Route exact path='/home' component={Home} />
      <Route path='/action-category/:category_id' component={CategoryPledges} />
    </React.Fragment>
  </Router>
)

export default App
