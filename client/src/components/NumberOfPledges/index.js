import React from "react"
import './style.css'

const NumberOfPledges = props => {
  const { details, allPledges, serverError } = props

  return (
    <div className="container-div">
      <div className="container-div__dashboard" >
        <h1 className="container-div__dashboard-title">Action Dashboard</h1></div>
      <div >{details.length}/{allPledges.length}<p className="container-div__number-of-Pledges-pledges">PLEDGES</p></div>
    </div >
  )
}

export default NumberOfPledges
