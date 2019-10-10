import React, { Component } from 'react'
import './index.css'
class PledgeConfirm extends Component {

  render() {
    return (
      <div className="ConfirmPage">
<p className="ConfirmPage_lets-Confirm">LET’S CONFIRM YOUR PLEDGE</p>
<p className="ConfirmPage_Confirm-dynamic">I commit to taking no more than one return flight each year. When I do fly, I will offset my emissions.</p>
<button className="ConfirmPage_Confirm-Button">Confirm the pledge</button>
<p className="ConfirmPage_unconfirm-guide" >*You can come back and deselect this pledge at any ctime if you don’t feel able to carry it out.</p>


      </div>
    )
  }
}

export default PledgeConfirm
