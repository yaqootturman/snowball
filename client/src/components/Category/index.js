import React, { Component } from "react"
import axios from "axios"

class Category extends Component {
  state = {
    details: []
  }
  componentDidMount = () => {
    console.log("hii")

    axios.get(`/api/dashboard`).then(({ data }) => {
      console.log("data", data)

      this.setState({
        details: data
      })
      console.log("details", this.state.details.data[0].img)
    })
  }

  render() {
    const { data } = this.state.details

    return (
      <div>
        {!data ? (
          <h1>Loading</h1>
        ) : (
          <img src={this.state.details.data[0].img} />
        )}
      </div>
    )
  }
}
export default Category
