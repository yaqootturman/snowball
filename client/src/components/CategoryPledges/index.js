import React from 'react'
import axios from 'axios'
import PledgeItem from './../PledgItem'
import BackButton from '../BackButton';
import Footer from '../Footer'
import './style.css'


class CategoryPledges extends React.Component {
  state = {
    pledge_info: [], // i used an array to store values of object cause its more difficult if i use each name or an object inside state object
    loading: true,
    details: {}
  };

  componentDidMount() {
    const data = sessionStorage.getItem('results')
    const info = JSON.parse(data)
    this.setState({ details: info })
    axios.get(`/api/action-category/${info.category_id}`).then(Response => {
      const pledge_info = Response.data
      this.setState({ loading: false, pledge_info })
    }).catch()
  }

  render() {
    const { pledge_info } = this.state
    const { details } = this.state

    return (
      <>
        <div className="category-pledges-page">
          < BackButton {...this.props} />
          {!details ?
            <h3>loading</h3>
            : <span><div className="category-container"><img src={details.img} className="category-container__category-img" alt={details.name} />
              <h1 className="category-container__category-title">{details.name}</h1>
              <p className="category-container__category-description">{details.description}</p>
            </div> <p className="category-container__pledges">{details.name} PLEDGES</p></span>}
          {
            !pledge_info.length ? <h2>Loading...</h2> : pledge_info.map((element, index) => {
              return (<PledgeItem {...this.props} element={element} key={index} />)
            })
          }
        </div>
        <Footer  {...this.props} />

      </>)
  }
}
export default CategoryPledges
