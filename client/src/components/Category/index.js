import React, { Component } from "react"
import './style.css'



class Category extends Component {
  state = {
    name: "",
  }

  // function to push the data to category page
  moveToCategorActionPage = (id) => {
    const { history, allCategories } = this.props
    sessionStorage.setItem('results', JSON.stringify(allCategories[id - 1]))
    history.push({
      pathname: `action-category/${id}`,
      data: allCategories[id - 1] // to take id from database
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
  componentDidMount = () => {



  }
  render() {
    const { allCategories, userPledges, categories } = this.props

    const pledgesCategory = categories

    return (
      <>
        < div className="category-div">
          {
            allCategories.map((item, i) => {
              return (
                <div className="category-div__dashboard-action" onClick={() => this.moveToCategorActionPage(item.category_id)} key={i}>
                  <img className="category-div__dashboard-action-image" src={item.img} alt={item.name} />
                  <p className="category-div__dashboard-action-title" >{item.name} </p>
                  <span className="category-div__dashboard-action-numbers">
                    <div className="category-div__dashboard-action-first"> {!userPledges ? <h3>loading</h3> : <div>{this.numberOfPledges(userPledges, item.category_id)}/ </div>}</div>
                    <div>
                      <p>{this.numberOfPledges2(pledgesCategory, item.category_id)}</p>
                    </div></span>
                </div>
              )
            })
          }
        </div>
      </>
    )

  }

}

export default Category
