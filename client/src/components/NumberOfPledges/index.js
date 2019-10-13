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
      console.log("hi", data);

      this.setState(
        { details: data })
    })
    axios.get('/api/dashboard_number_of_all_pledges').then(({ data }) => {
      console.log("r2", data);

      this.setState(
        { allPledges: data })
    })

  }

  render() {
    const { data } = this.state.details
    const { data2 } = this.state.allPledges
    console.log("2", data2);


    return (
      <div className="container">
        <h1 className="container__dashboard__title">Action Dashboard</h1>
        {/* {!data2 ? <h1>loading</h1> : <p>{data2.length}</p>} */}
        {!data ? (
          <h1>Loading</h1>
        ) :
          (
            <div className="container__numberOfPledges">
              {!data2 ? <h1>loading</h1> : (<div><p>{data2.length}/{data2.length}</p> <h3 className="container__pledges">PLEDGES</h3></div>)}
            </div>
          )
        }
      </div >
    )
  }
}
export default NumberOfPledges
