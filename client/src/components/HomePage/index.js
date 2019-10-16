
import React, { Component, useContext } from 'react'
// import UserPledges from '../UserPledges'
// import Footer from '../Footer'
// import axios from 'axios'
import './style.css'
// import { UserConsumer } from '../../UserContext'
import UserContext from '../../UserContext'

class HomePage extends Component {
  static contextType = UserContext

  state = {
    pledges: []
  }
  componentDidMount() {
    const user = this.context
    console.log(user, 'user')
    this.setState({ pledges: user })
  }
  render() {
    const { pledges } = this.state
    { console.log(pledges, 'pledges') }
    return (
      <>
        {!pledges.length ? <h1>loading</h1> : (pledges.map(element => {
          return <div>
            <h1>{element.title}</h1>
          </div>
        }))
        }
      </>
    )
  }
}
export default HomePage