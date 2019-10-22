import React from 'react'
import Footer from '../Footer'
import BackButton from '../BackButton'
import './style.css'

const DeletePledgeConfirmation = () => {
  const pledgeName = 'flying'
  return (
    <>
      <div className="delete-confirmation-dialog">
        <div className="delete-page-back-button"><BackButton /></div>
        <h3 className="delete-confirmation-dialog__dialog-title" >Delete Confirmation!</h3>
        <p className="delete-confirmation-dialog__delete-message">Are you Sure You Want To Delete The Pledge {pledgeName} ?</p>
        <img className="delete-confirmation-dialog__pledge-image" alt="pledge to delete " src="https://i.imgur.com/jC8Lx9b.png"></img>
        <button className="delete-confirmation-dialog__confirm-button button-aligner">Yes, Delete</button>
        <button className="delete-confirmation-dialog__cancel-button button-aligner">Cancel</button>
      </div>
      <Footer />
    </>
  )
}
export default DeletePledgeConfirmation