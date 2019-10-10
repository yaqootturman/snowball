import React from 'react'
import './style.css'
const PledgeItem = element => {
  return (
    <div className="pledge--div">
      <img className="pledge--div__img" src={element.img} />
      <p className="pledge--div__title">{element.title}</p>
      <p className="pledge--div__description">{element.description}</p>
      <span className="pledge--div__already">PLEDGES ALREADY </span>
      <span className="pledge--div__number">{element.number_of_enrollement}</span>
    </div>
  )
}
export default PledgeItem