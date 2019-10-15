import React from 'react'
import Category from '../Category'
import NumberOfPledges from '../NumberOfPledges'
import Footer from '../Footer'

const DashboardPage = props => {
  return (
    <div className="dashboard-page">
      <NumberOfPledges />
      <Category {...props} />
      <Footer />
    </div>
  )
}
export default DashboardPage