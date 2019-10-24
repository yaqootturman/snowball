import React, { Component } from "react"
import './style.css'
import axios from "axios"
import { Switch } from "react-router-dom";


class Category extends Component {
  state = {
    details: [],
    userPledges: [],
    name: "",
    categories: [],
    serverError: ""
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
      .catch(error => {
        this.setState({ serverError: error.response.data.message })
      })
    // request to get all pledges in each category in general 
    axios.get(`/api/dashboard_pledges_category`)
      .then(({ data }) => {
        this.setState({ categories: data })
      })
      .catch(error => {
        this.setState({ serverError: error.response.data.message })
      })
  }
  // function to push the data to category page
  moveToCategorActionPage = (id) => {
    const { history } = this.props
    sessionStorage.setItem('results', JSON.stringify(this.state.details.data[id - 1]))
    history.push({
      pathname: `action-category/${id}`,
      data: this.state.details.data[id - 1] // to take id from database
    })
  }

  // function to calculate all pledges that user make it in category by filter
  numberOfPledges = (arr1, item) => {
    let arr2 = arr1.filter((element) => {
      if (element.category_id === item) {
        return element.pledge_id
      }
      return false
    })
    return arr2.length
  }

  //function to calculate all pledges in the category by filtering the array
  numberOfPledges2 = (arr1, item) => {
    let arr2 = arr1.filter((element) => {
      if (element.category_id === item) {
        return element.pledge_id
      }
      return false

    })
    return arr2.length
  }

  render() {
    const { data } = this.state.details
    const { userPledges } = this.state.userPledges
    const { pledgesCategory } = this.state.categories
    const { serverError } = this.state
    return (
      <Switch>

        {serverError !== "" ? <h1>{serverError}</h1> :
          (<>
            {!data || !userPledges ? (
              <h1>Loading</h1>
            ) :
              (
                <div className="category-div">
                  {data.map((item, i) => {
                    return (
                      <div className="category-div__dashboard-action" onClick={() => this.moveToCategorActionPage(item.category_id)} key={i}>
                        <img className="category-div__dashboard-action-image" src={item.img} alt={item.name} />
                        <p className="category-div__dashboard-action-title" >{item.name} </p>
                        <span className="category-div__dashboard-action-numbers">
                          <div className="category-div__dashboard-action-first"> {!userPledges ? <h3>loading</h3> : <div>{this.numberOfPledges(userPledges, item.category_id)}/ </div>}</div>
                          <div>
                            {!pledgesCategory ? <h2>loading</h2> : <p>{this.numberOfPledges2(pledgesCategory, item.category_id)}</p>}
                          </div></span>
                      </div>
                    )
                  })}
                </div>
              )
            }
          </>)
        }

      </Switch>
    )
  }
}
export default Category
