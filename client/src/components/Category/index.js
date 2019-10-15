import React, { Component } from "react"
import './style.css'
import axios from "axios"

class Category extends Component {
  state = {
    details: [],
    userPledges: [],
    name: "",
    categories: [],

  }
  componentDidMount = () => {

    // request to get all categories
    const userId = 1
    axios.get(`/api/dashboard`).then(({ data }) => {

      this.setState({
        details: data
      })
    })
    // request to get pledges that user make it in all categories
    axios.get(`/api/dasboard_pledges_in_category/${userId}`).then(({ data }) => {
      this.setState(
        { userPledges: data })
    })
    // request to get all pledges in each category in general 
    axios.get(`/api/dashboard_pledges_category`)
      .then(({ data }) => {
        this.setState({ categories: data })
      })
  }
  // function to push the data to category page
  moveToCategorActionPage = () => {
    const { history } = this.props

    history.push({
      pathname: "/dashboard/action-category",
      data: this.state.details
    })
  }

  // function to calculate all pledges that user make it in category by filter
  numberOfPledges = (arr1, item) => {
    let arr2 = arr1.filter((element) => {
      if (element.name === item) {
        return element.pledge_name
      }
    })
    return arr2.length
  }

  //function to calculate all pledges in the category by filtering the array
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
    const { userPledges } = this.state.userPledges
    const { pledgesCategory } = this.state.categories
    return (
      <switch>
        {!data || !userPledges ? (
          <h1>Loading</h1>
        ) :
          (
            <div className="category-div">
              {data.map((item, i) => {
                return (
                  <div className="category-div__dashboard-action" onClick={this.moveToCategorActionPage} key={i}>
                    <img className="category-div__dashboard-action__image" src={item.img} alt={item.name} />
                    <p className="category-div__dashboard-action__title" >{item.name} </p>
                    <div> {!userPledges ? <h3>loading</h3> : <div>{this.numberOfPledges(userPledges, item.name)}/{!pledgesCategory ? <h2>loading</h2> : <p>{this.numberOfPledges2(pledgesCategory, item.category_id)}</p>} </div>}</div>
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
