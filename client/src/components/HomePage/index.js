import React, { Component } from 'react'
import UserPledges from '../UserPledges'
import axios from 'axios'

class HomePage extends Component {
  state = {
    pledges: []
  }
  componentDidMount() {
    const userId = 1
    axios.get(`/api/home/${userId}`).then(({ data }) => {
      this.setState({ pledges: data })
      console.log(data, 'data')
    })
      .catch(error => console.log('axios error', error))
  }
  render() {
    const { pledges } = this.state

    return (
      <React.Fragment>
        <h1>home</h1>
        <UserPledges userPledge={pledges[0]} />
      </React.Fragment>
    )
  }
}
export default HomePage