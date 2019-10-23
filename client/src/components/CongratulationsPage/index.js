import React, { Component } from "react";
import "./index.css";
import Footer from "../Footer";
export class Congratulations extends Component {
  state = {
    NumberOfEnrolledPeople: ""
  };

  componentDidMount() {
    if (window.localStorage.length > 0) {
      this.setState({
        NumberOfEnrolledPeople: window.localStorage.getItem("EnrolledPeople")
      });
    } else if (this.props.location.NumberOfEnrolledPeople) {
      const { NumberOfEnrolledPeople } = this.props.location;
     
      window.localStorage.setItem("EnrolledPeople", NumberOfEnrolledPeople);
      this.setState({
        NumberOfEnrolledPeople: window.localStorage.getItem("EnrolledPeople")
      });
    }
  }

  redirectInformation = () => {
    const { history } = this.props;
    window.localStorage.clear();
    history.push("/information");
  };
  redirectDashboard = () => {
    const { history } = this.props;
    window.localStorage.clear();
    history.push("/dashboard");
  };
  render() {
    return (
      <div className="congratulations__page">
        <p className="congratulations__page-congratulations">
          CONGRATULATIONS!
        </p>
        <p className="congratulations__page-doingAmazing">
          You are doing something amazing!
        </p>
        <p className="congratulations__page-motivation">
          You're now one of<span> {this.state.NumberOfEnrolledPeople} </span>{" "}
          people committed to this pledge and turning the tide on climate
          change.
        </p>
        <p className="congratulations__page-tips">TOP TIPS</p>
        <li>
          Revisit the pledge page for resources and support in carrying out the
          commitment
        </li>
        <li>
          All of your pledges are saved on your Home page for easy access.
        </li>

        <div className="congratulations__page-buttons">
          <div className="congratulations__page-buttons-choices">
            <button
              onClick={() => {
                this.redirectInformation();
              }}
            >
              Revisit pledge info
            </button>
            <button
              onClick={() => {
                this.redirectDashboard();
              }}
            >
              Make more pledges
            </button>
          </div>
          <div className="congratulations__page-buttons-share">
            <button>Share</button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Congratulations;
