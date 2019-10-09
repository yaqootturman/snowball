import React, { Component } from "react"
import axios from "axios"

class Category extends Component {
  state = {
    details: []
  }
  componentDidMount = () => {
    axios.get(`/api/dashboard`).then(({ data }) => {
      this.setState({
        details: data
      })
    })
  }

  moveToCategorActionPage = () => {
    const { history } = this.props

    history.push({
      pathname: "/dashboard/action-category",
      data: this.state.details
    })
  }

  render() {
    const { data } = this.state.details
    return (
      <div>
        {!data ? (
          <h1>Loading</h1>
        ) : (
            data.map(item => {
              return (
                <div onClick={this.moveToCategorActionPage}>
                  <img src={item.img} />
                  <p>{item.name}</p>
                </div>
              )
            })
          )}
      </div>
    )
  }
}
export default Category
