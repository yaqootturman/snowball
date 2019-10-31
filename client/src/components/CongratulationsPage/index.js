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
    HideComponent: false,
    pledgeName:'',
    pledgeId:0

  };

  componentDidMount() {
  
    if (sessionStorage.length>0) {

      this.setState({
        NumberOfEnrolledPeople:sessionStorage.getItem("EnrolledPeople").split(',$,')[0],
        pledgeName:sessionStorage.getItem("EnrolledPeople").split(',$,')[1],
        pledgeId:JSON.parse(sessionStorage.getItem("EnrolledPeople").split(',$,')[2]),
      });
    } else if (this.props.location.NumberOfEnrolledPeople) {
      const { NumberOfEnrolledPeople,pledgeName,pledgeId} = this.props.location;
      const separator = '$'
      sessionStorage.setItem("EnrolledPeople", [NumberOfEnrolledPeople,separator,pledgeName,separator,pledgeId]);
      this.setState({
        NumberOfEnrolledPeople: sessionStorage.getItem("EnrolledPeople").split(',$,')[0],
        pledgeName:sessionStorage.getItem("EnrolledPeople").split(',$,')[1],
        pledgeId:JSON.parse(sessionStorage.getItem("EnrolledPeople").split(',$,')[2]) 
       

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

  redirectPledgeInformation = () => {
    const { history } = this.props;
    history.push({pathname:`/action-category/pledge/${this.state.pledgeName}`},{ pledge_id:this.state.pledgeId});
  };
  redirectDashboard = () => {
    const { history } = this.props;
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
        {this.state.HideComponent === false ? (
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
                this.redirectPledgeInformation();
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
