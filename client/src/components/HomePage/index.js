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
    console.log(pledges, 'pledges list')
    console.log(pledges[0], 'one pledge')
    return (
      <React.Fragment>
        <h1>My Pledges</h1>
        <h5>TOTAL PLEDGES{pledges.length}</h5>

        {!pledges.length ? <h2>Loading...</h2> : <UserPledges userPledge={pledges[1]} />}



      </React.Fragment>
    )
  }
}
export default HomePage
