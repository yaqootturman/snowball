import React from 'react'
import Footer from '../Footer'
import BackButton from '../BackButton'
import axios from 'axios'
import './style.css'

const DeletePledgeConfirmation = (props) => {




  const { pledgeId } = props.match.params
  //get pledge info and handleChange function of the pledge to change the pledgeExit state in the pledgePage
  let { pledge_name, pledge_image } = props.location
  let { history } = props

  //  user_id will be changed to be taken from authentication cookies
  //  handleChange function is called to change the state of pledge
  const deleteUserPledge = () => {
    const userId = 1;
    axios.get(`/api/${userId}/${pledgeId}/deletePledge`).then(
      () => {
        history.push(`/home/${userId}`)
      }
    ).catch(err => { console.log("axios err", err) })
  }

  //read pledge info from session storage in case the page is refreshed and the props are lost
  if (!pledge_name) {
    const sessionData = sessionStorage.getItem('pledgeInfo');
    ({ pledge_name, pledge_image } = JSON.parse(sessionData));
  }

  return (

    <>
      <div className="delete-confirmation-dialog">
        <div className="delete-confirmation-dialog__back-button"><BackButton {...props} /></div>
        <h3 className="delete-confirmation-dialog__dialog-title" >Delete Confirmation!</h3>
        <p className="delete-confirmation-dialog__delete-message">Are you Sure You Want To Delete {pledge_name} Pledge ?</p>
        <img className="delete-confirmation-dialog__pledge-image" alt="pledge to delete " src={pledge_image}></img>
        <button className="delete-confirmation-dialog__confirm-button button-aligner" onClick={() => deleteUserPledge()}>Yes, Delete</button>
        <button className="delete-confirmation-dialog__cancel-button button-aligner" onClick={() => history.goBack()}>Cancel</button>
      </div>
      <Footer {...props} />
    </>
  )
}
export default DeletePledgeConfirmation





