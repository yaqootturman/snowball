import React, { Component } from "react"
import './style.css'
import axios from "axios"

class Category extends Component {
  state = {
    details: [],
    pledgesCategory: [],
    name: "",
    categories: [],

  }
  componentDidMount = () => {
    const userId = 1
    axios.get(`/api/dashboard`).then(({ data }) => {

      this.setState({
        details: data
      })
    })

    axios.get(`/api/dasboard_pledges_in_category/${userId}`).then(({ data }) => {
      this.setState(
        { pledgesCategory: data })
    })

    axios.get(`/api/dashboard_pledges_category`)
      .then(({ data }) => {
        this.setState({ categories: data })
      })
  }

  moveToCategorActionPage = () => {
    const { history } = this.props

    history.push({
      pathname: "/dashboard/action-category",
      data: this.state.details
    })
  }

  numberOfPledges = (arr1, item) => {
    let arr2 = arr1.filter((element) => {
      if (element.name === item) {
        return element.pledge_name
      }
    })
    return arr2.length
  }

  numberOfPledges2 = (arr1, item) => {
    let arr2 = arr1.filter((element) => {
      if (element.category_id === item) {
        return element.pledge_id
      }
    })
    return arr2.length
  }

  render() {
    const { data } = this.state.details
    const { data3 } = this.state.pledgesCategory
    const { data4 } = this.state.categories
    return (
      <switch>
        {!data || !data3 ? (
          <h1>Loading</h1>
        ) :
          (
            <div className="category-div">
              {data.map((item, i) => {
                return (
                  <div className="category-div__dashboard-action" onClick={this.moveToCategorActionPage} key={i}>
                    <img className="category-div__dashboard-action__image" src={item.img} alt={item.name} />
                    <p className="category-div__dashboard-action__title" >{item.name} </p>
                    <div> {!data3 ? <h3>loading</h3> : <div>{this.numberOfPledges(data3, item.name)}/{!data4 ? <h2>loading</h2> : <p>{this.numberOfPledges2(data4, item.category_id)}</p>} </div>}</div>
                  </div>

                )
              })}
            </div>
          )
        }
      </switch>
    )
  }
}
export default Category
