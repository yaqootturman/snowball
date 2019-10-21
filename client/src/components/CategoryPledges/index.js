import React from 'react'
import axios from 'axios'
import PledgeItem from './../PledgItem/PledgeItem'
import BackButton from '../BackButton';
import './style.css'


class CategoryPledges extends React.Component {
  state = {
    pledge_info: [], // i used an array to store values of object cause its more difficult if i use each name or an object inside state object
    loading: true,
    details: {}
  };

  componentDidMount() {
    const { data } = this.props.history.location
    const { category_id } = this.props.history.location.data; //this should change to take id from props
    this.setState({ details: data })
    console.log("s", this.state.details);



    axios.get(`/api/action-category/${category_id}`).then(Response => {
      const pledge_info = Response.data
      this.setState({ loading: false, pledge_info })
    }).catch()
  }

  render() {
    const { pledge_info } = this.state
    const { details } = this.state

    return (
      <>
        < BackButton />
        {!details ?
          <h3>loading</h3>
          : <div className="category-container"><img src={details.img} className="category-container__category-img" alt={details.name} />
            <h1 className="category-container__category-title">{details.name}</h1>
            <p className="category-container__category-description">{details.description}</p>
          </div>}
        {
          !pledge_info.length ? <h2>Loading...</h2> : pledge_info.map((element, index) => {
            return <PledgeItem {...this.props} element={element} key={index} />
          })
        }

      </>)
  }
}
export default CategoryPledges
