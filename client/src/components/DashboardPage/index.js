import React from 'react'
import Category from '../Category'
import NumberOfPledges from '../NumberOfPledges'
import axios from "axios"
import Footer from '../Footer'
import ClipLoader from 'react-spinners/ClipLoader'

class DashboardPage extends React.Component {
  state = {
    details: [],
    allPledges: [],
    serverError: "",
    loading1: true,
    loading2: true,
    userPledges: [],
    allCategories: [],
    categories: []
  }
  componentDidMount = () => {
    window.scrollTo(0, 0)
    let categoryInfo = Promise.all([this.getNumberOfUserPledges(), this.getNumberOfAllPledges()])
    categoryInfo.then((res) => {
      this.setState({ loading1: false })
    })
      .catch(error => {
        console.log("error000", error);
      })

    let categoryInfoPage = Promise.all([this.getAllCategories(), this.getAllPledges()], [this.getAllPledgesOfCategory()])
    categoryInfoPage.then((res) => {
      this.setState({ loading2: false })

    }).catch((error) => console.log(error))
  }
  getNumberOfUserPledges() {

    const userId = 1
    return axios.get(`/api/dashboard_number_of_pledges/${userId}`).then(({ data }) => {

      this.setState({ details: data.data })
      return data
    })
      .catch(error => {
        this.setState({ serverError: error })
      })
  }

  getNumberOfAllPledges() {
    return axios.get('/api/dashboard_number_of_all_pledges').then(({ data }) => {

      this.setState({ allPledges: data.allPledges })
      return data

    }).catch(error => {
      this.setState({ serverError: error })
    })


  }
  getAllCategories() {
    // request to get all categories
    return axios.get(`/api/dashboard`).then(({ data }) => {
      this.setState({
        allCategories: data
      })
      return data
    }).catch(error =>
      this.setState({ serverError: "server error" })
    )
  }

  getAllPledges() {
    const userId = 1

    // request to get pledges that user make it in all categories
    return axios.get(`/api/dasboard_pledges_in_category/${userId}`).then(({ data }) => {

      this.setState(
        { userPledges: data })
      return data
    })
      .catch(error => {
        this.setState({ serverError: "server error" })
      })
  }
  getAllPledgesOfCategory() {
    // request to get all pledges in each category in general 
    axios.get(`/api/dashboard_pledges_category`)
      .then(({ data }) => {
        this.setState({ categories: data.pledgesCategory })
      })
      .catch(error => {
        this.setState({ serverError: "server error" })
      })
  }

  render() {
    const { details, allPledges, loading1, loading2, userPledges, allCategories, categories, serverError } = this.state
    return (
      <>
        {
          serverError !== "" ? <h1>{serverError}</h1> :
            (
              loading1 || loading2 ? (
                <div className="loading-spinner">
                  <ClipLoader
                    className="loading-spinner__home"
                    sizeUnit={'px'}
                    size={80}
                    color={'#123abc'}
                  />
                </div>)
                :
                (<div className="dashboard-page">
                  <NumberOfPledges {...this.props} details={details} allPledges={allPledges} />
                  <Category {...this.props} allCategories={allCategories.data} userPledges={userPledges.userPledges} categories={categories} />
                  <Footer  {...this.props} />
                </div>)
            )
        }

      </>
    )

  }

}
export default DashboardPage