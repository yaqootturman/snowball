import React from 'react'
import './style.css'

const DeletePledgeConfirmation = () => {
  return (
    <div className="delete-confirmation-dialog">
      <h3 className="delete-confirmation-dialog__dialog-title" ><p className="delete-confirmation-dialog__title-message" >Delete Confirmation</p><icon className="delete-confirmation-dialog__delete-icon" >&#10005;</icon></h3>
      <p className="delete-confirmation-dialog__delete-message">Are you Sure You Want To Delete The Pledge? </p>
      <button className="delete-confirmation-dialog__confirm-button button-aligner">Yes, Delete</button>
      <button className="delete-confirmation-dialog__cancel-button button-aligner">Cancel</button>
    </div>
  )
}
export default DeletePledgeConfirmation