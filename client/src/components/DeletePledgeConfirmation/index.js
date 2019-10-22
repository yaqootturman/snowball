import React from 'react'
import Footer from '../Footer'
import BackButton from '../BackButton'
import './style.css'

const DeletePledgeConfirmation = (props) => {

  // const {pledgeName,pledgePhoto} =this.props.location.data
  //const {pledgeId} = this.props.params
  // permanentallyDeletePledge(){

  // }
  // cancelpledgeDeletion(){

  // }

  const pledgeName = 'flying'
  return (
    <>
      <div className="delete-confirmation-dialog">
        <div className="delete-confirmation-dialog__back-button"><BackButton /></div>
        <h3 className="delete-confirmation-dialog__dialog-title" >Delete Confirmation!</h3>
        {/* here  pledge name , pledge photo come from the preveious page which is the pledge page */}
        <p className="delete-confirmation-dialog__delete-message">Are you Sure You Want To Delete {pledgeName} Pledge ?</p>
        <img className="delete-confirmation-dialog__pledge-image" alt="pledge to delete " src="https://i.imgur.com/jC8Lx9b.png"></img>
        <button className="delete-confirmation-dialog__confirm-button button-aligner" onClick={}>Yes, Delete</button>
        <button className="delete-confirmation-dialog__cancel-button button-aligner" onClick={}>Cancel</button>
      </div>
      <Footer />
    </>
  )
}
export default DeletePledgeConfirmation