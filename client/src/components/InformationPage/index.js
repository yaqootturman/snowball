import React, { Component } from "react";
import "./style.css";
import BackButton from "../BackButton";
import Footer from "../Footer";
export class InformationPage extends Component {
  render() {
    return (
      <div className="information__page">
        <BackButton {... this.props} />
        <p className="information__page-title">Information</p>
        <p className="information__page-question">What’s our vision?</p>

        <hr className="information__page-hr1" />
        <p className="information__page-answer">
          A global network of people, fighting climate change together, through
          our everyday actions.
        </p>
        <p className="information__page-question">How do we get there?</p>
        <hr className="information__page-hr2" />
        <p className="information__page-answer">
          By showing people what they can do, giving them the tools to do it and
          allowing them to commit to a better future. When we act together,
          small changes have a big impact.
        </p>
        <p className="information__page-question">What’s the goal?</p>
        <hr className="information__page-hr3" />
        <p className="information__page-answer">
          When people act together, the power lies with the people in the fight
          against climate change. We want to create a movement to release that
          inner power!
        </p>
        <Footer {... this.props} />
      </div>
    );
  }
}

export default InformationPage;
