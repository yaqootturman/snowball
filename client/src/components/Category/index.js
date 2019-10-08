import React, { Component } from 'react'
import axios from 'axios'

class Category extends Component {
  state={
    details: ""
  }
  componentDidMount = () => {
    console.log("hii");
    
    axios.get(`/api/dashboard`).then(({ data }) => {
      console.log("data",data);
      
      this.setState({
        details: data
      })
    })
  }

  


  render() {

    return (
      <div>
        data
      </div>
     
      
    )
    }
}
export default Category