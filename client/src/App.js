import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import CategoryPledges from './components/CategoryPledges'
import Congratulations from './components/CongratulationsPage'


const App = () => (
  <Router>
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route path='/dashboard/action-category/:category_id' component={CategoryPledges} />
      <Route path='/congratulations' component={Congratulations} />
    </React.Fragment>
  </Router>
)

export default App
