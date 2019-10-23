import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/HomePage'
import DashboardPage from './components/DashboardPage'
import CategoryPledges from './components/CategoryPledges'
import PledgePage from './components/PledgePage'
import ConfirmPage from './components/ConfirmPage'
import Congratulations from './components/CongratulationsPage'
import DeletePledgeConfirmation from './components/DeletePledgeConfirmation'
import InformationPage from './components/InformationPage'


const App = () => {

  return (
    <Router>
      <Route exact path='/' component={LandingPage} />
      <Route exact path="/dashboard" component={DashboardPage} />
      <Route exact path='/home/:userId' component={Home} />
      <Route exact path='/action-category/:category_id' component={CategoryPledges} />
      <Route exact path='/action-category/pledge/:pledge_title' component={PledgePage} />
      <Route exact path='/:userId/:pledgeId/addPledge' component={ConfirmPage} />
      <Route exact path='/congratulations' component={Congratulations} />
      <Route exact path='/delete-pledge-confirmation/:pledgeId' component={DeletePledgeConfirmation} />
      <Route exact path='/information' component={InformationPage} />
    </Router>
  )
}

export default App
