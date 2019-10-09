import React from 'react'

const UserPledge = ({ title, description, number_of_enrollement }) => {
  return (
    <React.Fragment>
      <h1>{title}</h1>
      <p>{description}</p>
      <h6>{number_of_enrollement}</h6>
    </React.Fragment>

  )
}

export default UserPledge