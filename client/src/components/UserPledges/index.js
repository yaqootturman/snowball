import React from 'react'
import './style.css'

const UserPledge = ({ history, userPledge: { pledge_id, title, description, number_of_enrollement, img } }) => {
  return (
    <div className="user-pledge">
      <img className="user-pledge__image" alt="pledge photo" src={img} onClick={() => { history.push(`/action-category/pledge/${title}`, { data: pledge_id }) }} />
      <h5 className="user-pledge__title">{title}</h5>
      <span className="user-pledge__description">{description}</span>
      <div className="user-pledge__enrollements"><img className="user-pledge__enrollements__image" alt="people" src="https://imgur.com/qw15p7I.png" />
        <p className="user-pledge__enrollements__text">{number_of_enrollement}</p></div>
    </div>
  )
}

export default UserPledge





