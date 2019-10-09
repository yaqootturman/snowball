import React, { Component } from 'react'
import UserPledges from '../UserPledges'
import axios from 'axios'

class HomePage extends Component {
  state = {
    pledges: []
  }
  componentDidMount() {
    const userId = 1
    axios.get('/api/home/${userId}').then(result => console.log('axios result', result))
      .catch(error => console.log('axios error', error))
  }
  render() {
    const pledges = this.state
    return (
      <React.Fragment>
        <UserPledges userPledge={pledges[0]} />
      </React.Fragment>
    )
  }
}
export default HomePage