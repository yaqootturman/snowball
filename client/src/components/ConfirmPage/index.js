import React, { Component } from "react";
import BackButton from "../BackButton";
import Footer from "../Footer";
import axios from "axios";
import "./style.css";

export class ConfirmPage extends Component {
  state = {
    pledgeDescription: '',
    NumberOfEnrolledPeople: '',
    serverError: ""
  };
  componentDidMount() {
    window.scrollTo(0, 0)
    if (this.props.location.data) {
      const {
        description,
        number_of_enrollement
      } = this.props.location.data[0];

      const separator = "$";
      const confirmDescription = description.replace("I will", "");

      sessionStorage.setItem('storedData', JSON.stringify(
        [confirmDescription,
          separator,
          number_of_enrollement + 1]
      ))

      this.setState({
        pledgeDescription: confirmDescription,
        NumberOfEnrolledPeople: number_of_enrollement + 1
      });
    } else {

      const infoPledge = sessionStorage.getItem("storedData")
      const pledgeDescription = JSON.parse(infoPledge)

      this.setState({
        pledgeDescription: pledgeDescription[0],
        NumberOfEnrolledPeople: infoPledge[2]
      });
    }
  }
  confirmUserPledge = () => {
    const { pathname } = this.props.location;
    localStorage.clear();
    let Ids = pathname.split("/");
    const userId = Ids[1],
      pledgeId = Ids[2];
    axios
      .post(`/api/${userId}/${pledgeId}/addPledge`)
      .then(response => {
        // handle success
        if (response.data.message) {
          alert(response.data.message);
        }

        const { history } = this.props;
        const url = response.data.redirectUrl;
        history.push({
          pathname: url,
          NumberOfEnrolledPeople: this.state.NumberOfEnrolledPeople
        });
      })
      .catch(error => {
        this.setState({ serverError: error.response.data.message })
      })
  };
  render() {
    const { serverError, pledgeDescription } = this.state
    return (
      <div className="confirm__Page">
        {serverError !== "" ? <h1>{serverError}</h1> :
          (
            <>
              <BackButton {...this.props} />

              <p className="confirm__Page-letsConfirm">LET' S CONFIRM YOUR PLEDGE</p>
              <p className="confirm__Page-confirmPledge">
                I commit to
          {pledgeDescription}.
              </p>
              <button
                className="confirm__Page-confirmButton"
                onClick={() => {
                  this.confirmUserPledge();
                }}
              >
                Confirm the pledge
        </button>
              <p className="confirm__Page-unConfirm">
                * You can come back and deselect this pledge at any time if you don' t
                feel able to carry it out.
        </p>

              <Footer {...this.props} />
            </>
          )}

      </div>
    );
  }
}

export default ConfirmPage;
