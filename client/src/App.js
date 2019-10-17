import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Home from './components/HomePage'
import CategoryPledges from './components/CategoryPledges'
import PledgePage from './components/PledgePage'

import { UserProvider } from './UserContext'
import axios from 'axios';

class App extends React.Component {

  state = {
    pledges: []
  }
  componentDidMount() {
    const userId = 1;
    axios.get(`/api/home/${userId}`).then(({ data }) => {
      this.setState({ pledges: data })
    })
      .catch(error => {
        console.log("err", error);
      })
  }
  render() {
    const { pledges } = this.state
    return (
      <>
        {!pledges.length ? <h1>Loading</h1> :
          (
            <UserProvider value={pledges}>
              <Router>
                <Route exact path='/' component={LandingPage} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/action-category/:category_id' component={CategoryPledges} />
                <Route exact path='/action-category/pledge/:pledge_title' component={PledgePage} />

              </Router>
            </UserProvider>)
        }
      </>
    )
  }
}

export default App
