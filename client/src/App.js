import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import PledgeConfirmPage from './components/PledgeConfirmPage'
const App = () => {

  return (


    <div className="App">
      <Router>
        <React.Fragment>
          <Route exact path='/' component={ LandingPage } />
          <Route exact path='/userId/pledgeId/addPledge' component={ PledgeConfirmPage } />
        </React.Fragment>
      </Router>
    </div>
  );
}

export default App
