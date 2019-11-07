
import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import reducer from '../src/redux/reducer'

import LandingPage from './components/LandingPage'
import Home from './components/HomePage'
import DashboardPage from './components/DashboardPage'
import CategoryPledges from './components/CategoryPledges'
import PledgePage from './components/PledgePage'
import ConfirmPage from './components/ConfirmPage'
import Congratulations from './components/CongratulationsPage'
import DeletePledgeConfirmation from './components/DeletePledgeConfirmation'
import InformationPage from './components/InformationPage'
import FrontEndError from './components/FrontEndError'

const store = createStore(reducer, applyMiddleware(thunk))

const App = () => {

  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route exact path="/dashboard" component={DashboardPage} />
          <Route exact path='/home/:userId' component={Home} />
          <Route exact path='/action-category/:category_id' component={CategoryPledges} />
          <Route exact path='/action-category/pledge/:pledge_title' component={PledgePage} />
          <Route exact path='/:userId/:pledgeId/addPledge' component={ConfirmPage} />
          <Route exact path='/congratulations' component={Congratulations} />
          <Route exact path='/delete-pledge-confirmation/:pledgeId' component={DeletePledgeConfirmation} />
          <Route exact path='/information' component={InformationPage} />
          <Route path="" component={FrontEndError} />
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
