import React from 'react'
import './style.css'

const UserPledge = ({ userPledge: { title, description, number_of_enrollement, img } }) => {
  console.log(img, 'title')

  return (
    <div className="user-pledge">
      <img className="user-pledge__image" alt="pledge photo" src={img} />
      <h5 className="user-pledge__title">{title}</h5>
      <p className="user-pledge__description">{description}</p>
      <span className="user-pledge__enrollements">{number_of_enrollement}</span>

    </div>
  )
}

export default UserPledge

