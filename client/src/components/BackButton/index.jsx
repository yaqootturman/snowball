import React, { Component } from 'react'
import './index.css'
class BackButton extends Component {
  goBack = () => {
    // this.props.history.goBack();
    console.log("this should go back")
  }
  render() {
    return (
      <div>
        <button className="Back_button" onClick={ ()=>{
          this.goBack();
        } } > <div className="Back_button_inner"><img src="https://i.ibb.co/47c20FN/Polygon.png" alt="arrow-back" /><p>BACK</p></div></button>
      </div>
    )
  }
}

export default BackButton
