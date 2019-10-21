import React, { Component } from 'react'
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
    return (
      <React.Fragment>
        <h1 className="home-title">My Pledges</h1>
        <h5 className="home-subtitle">TOTAL PLEDGES: {userPledges.length}</h5>

        {!userPledges.length ? <h2>  Loading...</h2> :
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