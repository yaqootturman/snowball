import React from 'react'
import axios from 'axios'

// there  is an a problem with db at pledge table
class CategoryPledges extends React.Component {
  state = {
    pledge_info: [], // i used an array to store values of object cause its more difficult if i use each name or an object inside state object
    loading: true
  };

  componentDidMount() {
    const { pledge_info, loading } = this.state
    const category_id = 1; //this should change to take id from props
    axios.get(`/api/action-category/${category_id}`).then(Response => {
      const pledge_info_obj = Response.data[0]
      const pledge_info = Object.values(pledge_info_obj)
      this.setState({ loading: false, pledge_info })
    }).catch()
  }

  render() {
    const { pledge_info, loading } = this.state

    if (loading == true) {
      return <h1>loading</h1>
    } else {
      return (
        <>
          <h1>{pledge_info[2]}</h1>
          <p>description{pledge_info[3]}</p>
          <p>number_of_enrollement{pledge_info[4]}</p>
          <img src={pledge_info[5]} />
          <p>importance{pledge_info[6]}</p>
          <p>further_info{pledge_info[7]}</p>
        </>)
    }

  }
}
export default CategoryPledges
