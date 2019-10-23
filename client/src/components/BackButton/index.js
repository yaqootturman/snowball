import React, { Component } from 'react'
import './style.css'
class BackButton extends Component {
  goBack = () => {
    this.props.history.goBack();
  }
  render() {
    return (
      <div>
        <button className="Back__button" onClick={() => {
          this.goBack();
        }} > <div className="Back__button-inner"><img src="https://i.ibb.co/47c20FN/Polygon.png" alt="arrow-back" /><p>BACK</p></div></button>
      </div>
    )
  }
}

export default BackButton
