import React, { Component } from "react"
import './style.css'
import axios from "axios"

class Category extends Component {
  state = {
    details: [],
    pledgesCategory: [],
    name: "",
    categories: []
  }
  componentDidMount = () => {
    const userId = 1
    axios.get(`/api/dashboard`).then(({ data }) => {
      console.log("dash", data);

      this.setState({
        details: data
      })
      // this.fetchPledge()
    })
    axios.get(`/api/dasboard_pledges_in_category/${userId}`).then(({ data }) => {
      console.log("hi", data);

      this.setState(
        { pledgesCategory: data })
    })


  }

  fetchPledge = (categoryName) => {
    var len = 0;
    axios.get(`/api/dashboard_pledges_category/${categoryName}`)
      .then(({ data }) => {
        console.log('dgdsg', data.data4[0]);
        console.log('lll', data.data4.length)
        return len = data.data4.length

      })
      .then(len => { return len })


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
            <div className="category">
              {data.map((item, i) => {
                return (
                  <div className="category__dashboardAction" onClick={this.moveToCategorActionPage} key={i}>
                    <img className="category__dashboardAction__image" src={item.img} alt={item.name} />
                    <p className="category__dashboardAction__title" >{item.name} </p>
                    <div> {!data3 ? <h3>loading</h3> : <div>{this.numberOfPledges(data3, item.name)}/{this.fetchPledge(item.name)} </div>}</div>
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
