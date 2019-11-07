import React from 'react'
import axios from 'axios'
import PledgeItem from './../PledgItem'
import BackButton from '../BackButton';
import Footer from '../Footer'
import './style.css'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ClipLoader from 'react-spinners/ClipLoader'
import { getCategoryPledges } from '../../redux/actions'


class CategoryPledges extends React.Component {
  state = {
    details: {},
    serverError: ""
  };

  componentDidMount() {
    const data = sessionStorage.getItem('results')
    const info = JSON.parse(data)
    this.setState({ details: info })
    this.props.getCategoryPledges(info.category_id)
  }

  render() {
    const { serverError } = this.state
    const { details } = this.state
    const { pledge_info } = this.props

    return (
      <>
        {serverError !== "" ? <h1>{serverError}</h1> : (
          <>
            <div className="category-pledges-page">
              {this.props.loading ?
                <div className="loading-spinner">
                  <ClipLoader
                    className="loading-spinner__home"
                    sizeUnit={'px'}
                    size={80}
                    color={'#123abc'}
                  />
                </div> :

                (<>
                  < BackButton {...this.props} />
                  <span>
                    <div className="category-container"><img src={details.img} className="category-container__category-img" alt={details.name} />
                      <h1 className="category-container__category-title">{details.name}</h1>
                      <p className="category-container__category-description">{details.description}</p>
                    </div><p className="category-container__pledges">{details.name} PLEDGES</p></span>
                  {pledge_info.map((element, index) => {
                    return (<PledgeItem {...this.props} element={element} key={index} />)
                  }

                  )}
                  <Footer  {...this.props} />

                </>)
              }
            </div>
          </>

        )}

      </>

    )
  }
}

//used for selecting the part of the data from the store that the connected component needs.
const mapStateToProps = (state) => {
  return {
    pledge_info: state.pledge_info,
    loading: state.loading,
  }
}


// allows you to specify which actions your component might need to dispatch.It lets you provide action dispatching functions as props. 
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCategoryPledges
  }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(CategoryPledges)

