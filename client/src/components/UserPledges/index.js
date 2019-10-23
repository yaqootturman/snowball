import React from 'react'
import './style.css'

const UserPledge = ({ history, userPledge: { pledge_id, title, description, number_of_enrollement, banner_img } }) => {
  return (
    <div className="user-pledge">
      <img className="user-pledge__pledge-image" alt="user pledge" src={banner_img} onClick={() => { history.push(`/action-category/pledge/${title}`, { pledge_id: pledge_id }) }} />
      <h5 className="user-pledge__pledge-title">{title}</h5>
      <span className="user-pledge__pledge-description">{description}</span>
      <div className="user-pledge__pledge-enrollements-badge"><img className="user-pledge__pledge-enrollements-icon" alt="people" src="https://imgur.com/qw15p7I.png" />
        <p className="user-pledge__pledge-enrollements-number">{number_of_enrollement}</p></div>
    </div>
  )
}

export default UserPledge





