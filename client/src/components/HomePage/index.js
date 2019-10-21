import React, { Component } from 'react'
import nl2br from 'react-newline-to-break';
import UserPledges from '../UserPledges'
import Footer from '../Footer'
import axios from 'axios'
import './style.css'

class HomePage extends Component {
  state = {
    userPledges: []
  }

  componentDidMount() {
    const userId = 1;
    axios.get(`/api/home/${userId}`).then(({ data }) => {
      this.setState({ userPledges: data })
    })
      .catch(error => {
        console.log("error", error);
      })
  }

  render() {
    const { userPledges } = this.state
    const { history } = this.props
    const userMessage = 'You haven’t made any pledges yet!\n\n Head to your action dashboard to see how you can fight climate change today.'
    return (
      <React.Fragment>
        <h1 className="home-title">My Pledges</h1>
        <h5 className="home-subtitle">TOTAL PLEDGES: {userPledges.length}</h5>

        {!userPledges.length ?
          (<>
            <p className="home-user-message">{nl2br(userMessage)}</p>
            <button className="home-redirect-to-dashboard" onClick={() => history.push('/dashboard')}><img className="home-dashboard-icon" alt="dashboard icon" src="https://imgur.com/cWgJL1U.png" /><span className="dashboard-button">Action Dashboard</span></button>
          </>) :
          userPledges.map(onePledge => {
            return <UserPledges {...this.props} userPledge={onePledge} key={onePledge.pledge_id} />
          })
        }
        <Footer />
      </React.Fragment >
    )

  }
}
export default HomePage