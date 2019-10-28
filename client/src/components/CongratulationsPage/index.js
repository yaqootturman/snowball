import React, { Component } from "react";
import "./style.css";
import Footer from "../Footer";
import Confetti from "react-confetti";
import ReactResizeDetector from "react-resize-detector";
export class Congratulations extends Component {
  state = {
    NumberOfEnrolledPeople: "",
    width: window.screen.width,
    height: window.screen.height,
    HideComponent: false
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
    this.hideCelebrate();
  }

  hideCelebrate() {
    setTimeout(() => {
      this.hidePlayerControls();
    }, 6000);
  }
  hidePlayerControls() {
    this.setState({ HideComponent: true });
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
  onResize = () => {
    this.setState({ width: window.screen.width, height: window.screen.height });
  };

  render() {
    return (
      <div className="congratulations__page">
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={this.onResize}
        />
        {this.state.HideComponent == false ? (
          <Confetti width={this.state.width} height={this.state.height} />
        ) : (
          <></>
        )}
        <p className="congratulations__page-congratulations">
          CONGRATULATIONS!
        </p>
        <p className="congratulations__page-doingAmazing">
          You are doing something amazing!
        </p>
        <p className="congratulations__page-motivation">
          You're now one of<span> {this.state.NumberOfEnrolledPeople} </span>
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
        <Footer {...this.props} />
      </div>
    );
  }
}

export default Congratulations;
