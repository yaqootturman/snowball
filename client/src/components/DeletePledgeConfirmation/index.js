import React from 'react'
import Footer from '../Footer'
import BackButton from '../BackButton'
import axios from 'axios'
import './style.css'

const DeletePledgeConfirmation = (props) => {

  const { pledgeId } = props.match.params
  let { history } = props
  let buttonStatus = false

  const deleteUserPledge = () => {
    const userId = 1;
    axios.get(`/api/${userId}/${pledgeId}/deletePledge`)
      .then(
        () => history.push(`/home/${userId}`)

      ).catch(error => {
        if (error.response.status === 403) {
          buttonStatus = true
          alert(error.response.data.message);
          history.push(error.response.data.redirectUrl);

        }
      })
  }
  return (

    <>
      <div className="delete-confirmation-dialog">
        <div className="delete-confirmation-dialog__back-button"><BackButton {...props} /></div>
        <p className="delete-confirmation-dialog__delete-message">Are you Sure You Want To Delete This Pledge ?</p>
        <button className="delete-confirmation-dialog__confirm-button button-aligner" onClick={() => deleteUserPledge()} disabled={buttonStatus}>Yes, please remove the pledge</button>
      </div>
      <Footer {...props} />
    </>
  )
}
export default DeletePledgeConfirmation





