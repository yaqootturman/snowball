import React, { Component } from 'react'
import UserPledges from '../UserPledges'
import Footer from '../Footer'
import AppContext from '../../UserContext';
import './style.css'

class HomePage extends Component {
  static contextType = AppContext

  state = {
    userPledges: []
  }

  componentDidMount() {
    const userPledges = this.context
    this.setState({ userPledges })
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