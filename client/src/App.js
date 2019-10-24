import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/HomePage'
import DashboardPage from './components/DashboardPage'
import CategoryPledges from './components/CategoryPledges'
<<<<<<< HEAD
import InformationPage from './components/InformationPage'
=======
import PledgePage from './components/PledgePage'
import ConfirmPage from './components/ConfirmPage'
import Congratulations from './components/CongratulationsPage'
import InformationPage from './components/InformationPage'
import FrontEndError from './components/FrontEndError'
>>>>>>> 439d6dc6241d6a0cdc8529c716225e8c79289ea4

const App = () => {

  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/action-category/:category_id' component={CategoryPledges} />
          <Route exact path='/action-category/pledge/:pledge_title' component={PledgePage} />
          <Route exact path='/:userId/:pledgeId/addPledge' component={ConfirmPage} />
          <Route exact path='/congratulations' component={Congratulations} />
          <Route exact path='/information' component={InformationPage} />
          <Route path="" component={FrontEndError} />
        </Switch>
      </React.Fragment>
    </Router>
  )
}

<<<<<<< HEAD
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
=======
>>>>>>> 439d6dc6241d6a0cdc8529c716225e8c79289ea4

export default App
