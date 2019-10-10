import React from 'react'
import Category from '../Category'
import NumberOfPledges from '../NumberOfPledges'


const DashboardPage = props => {
  return (
    <>
      <NumberOfPledges />
      <Category {...props} />
    </>
  )
}
export default DashboardPage