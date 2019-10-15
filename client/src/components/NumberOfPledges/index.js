import React, { Component } from "react"
import './style.css'
import axios from "axios"

class NumberOfPledges extends Component {
  state = {
    details: [],
    allPledges: []
  }
  componentDidMount = () => {
    const userId = 1
    axios.get(`/api/dashboard_number_of_pledges/${userId}`).then(({ data }) => {


      this.setState(
        { details: data })
    })
    axios.get('/api/dashboard_number_of_all_pledges').then(({ data }) => {


      this.setState(
        { allPledges: data })
    })

  }

  render() {
    const { data } = this.state.details
    const { allPledges } = this.state.allPledges



    return (
      <div className="container-div">
        <p className="container-div__dashboard__title">Action Dashboard</p>

        {!data ? (
          <h1>Loading</h1>
        ) :
          (
            <div className="container-div__numberOfPledges">
              {!allPledges ? <h1>loading</h1> : (<div ><p className="container-div__numberOfPledges__numbers">{data.length}/{allPledges.length}</p> <h3 className="container-div__pledges">PLEDGES</h3></div>)}
            </div>
          )
        }
      </div >
    )
  }
}
export default NumberOfPledges
