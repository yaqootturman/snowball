import './index.css'

import React, { Component } from 'react'

class Footer extends Component {

  // these function is used to change the end point by using this.props.history.push(the-end-point)

  Home = () => {
    const { history } = this.props

    history.push('/home')
  }
  Actions = () => {
    const { history } = this.props

    history.push('/dashboard')
  }

  Info = () => {
    const { history } = this.props

    history.push('/information')
  }

  render() {
    return (
      <div className="footer">

        <section className="footer__footer-element" onClick={this.Home}><img src="https://img.icons8.com/material-sharp/48/000000/home-page.png" alt="Home" /><p>Home</p></section>
        <section className="footer__footer-element" onClick={this.Actions} ><img src="https://img.icons8.com/ios-glyphs/60/000000/keypad.png" alt="Actions" /><p>Actions</p></section>
        <section className="footer__footer-element" onClick={this.Info} ><img src="https://img.icons8.com/android/48/000000/info.png" alt="info" /><p>Info</p></section>

      </div>
    )
  }
}

export default Footer
