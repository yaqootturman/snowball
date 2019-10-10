import React from 'react'
import Category from '../Category'
import NumberOfPledges from '../NumberOfPledges'


const DashboardPage = props => {
  return (
    <>
      <Category {...props} />
      <NumberOfPledges />
    </>
  )
}
export default DashboardPage