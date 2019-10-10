import React, { Component } from "react"
import './style.css'
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
        <h1 className="dashboard__title">Action Dashboard</h1>
        {!data ? (
          <h1>Loading</h1>
        ) :
          (
            <div className="category">
              {data.map((item, i) => {
                return (
                  <div className="category__dashboardAction" onClick={this.moveToCategorActionPage} key={i}>
                    <img className="category__dashboardAction__image" src={item.img} alt={item.name} />
                    <p className="category__dashboardAction__title" >{item.name}</p>
                  </div>
                )
              })}
            </div>
          )
        }
      </div >
    )
  }
}
export default Category
