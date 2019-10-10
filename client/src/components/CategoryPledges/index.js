import React from 'react'
import axios from 'axios'
import PledgeItem from './../PledgItem/PledgeItem'

class CategoryPledges extends React.Component {
  state = {
    pledge_info: [], // i used an array to store values of object cause its more difficult if i use each name or an object inside state object
    loading: true
  };

  componentDidMount() {
    const category_id = 1; //this should change to take id from props
    axios.get(`/api/action-category/${category_id}`).then(Response => {
      const pledge_info = Response.data
      this.setState({ loading: false, pledge_info })
    }).catch()
  }

  render() {
    const { pledge_info, loading } = this.state
    return (
      <>
        {
          !pledge_info.length ? <h1>Loading...</h1> : pledge_info.map(element => {
            return <PledgeItem {...element} />
          })
        }

      </>)
  }
}
export default CategoryPledges
