import React from 'react'

const PledgeItem = element => {
  return (
    <>
      <h1>{element.img}</h1>
      <p>{element.title}</p>
      <p>{element.description}</p>
      <p>{element.further_info}</p>
      <p>{element.number_of_enrollement}</p>
      <p>{element.importance}</p>
    </>
  )
}
export default PledgeItem