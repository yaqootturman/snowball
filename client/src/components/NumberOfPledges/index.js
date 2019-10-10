import React, { Component } from "react"
import './style.css'
import axios from "axios"

class NumberOfPledges extends Component {
  state = {
    details: [],
  }
  componentDidMount = () => {
    const userId = 1
    axios.get(`/api/dashboard_number_of_pledges/${userId}`).then(({ data }) => {
      console.log("hi", data);

      this.setState(
        { details: data })
    })

  }

  render() {
    const { data } = this.state.details
    return (
      <div className="container">
        <h1 className="container__dashboard__title">Action Dashboard</h1>
        {!data ? (
          <h1>Loading</h1>
        ) :
          (
            <div className="container__numberOfPledges">{data.length}</div>
          )
        }
      </div >
    )
  }
}
export default NumberOfPledges
