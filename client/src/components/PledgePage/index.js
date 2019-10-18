import React from "react"
import AppContext from '../../UserContext';

import axios from 'axios'
class PledgePage extends React.Component {
  static contextType = AppContext

  state = {
    userPledges: [],
    userPledges: [],
    pledgeInfo: [],
    pledgeInstructions: [],
    pledgeProsCons: [],
    pledgeResources: [],
    pledgeReferences: [],
    userExist: false
  }

  componentDidMount() {
    const userPledges = this.context
    this.setState({ userPledges })

    // compare between id which recieve from userPledges which recieve by context api and id from category to decide if user already mark the pledge or not
    const { pledge_id } = this.props.location.state
    userPledges.map((element) => {
      if (element.pledge_id === pledge_id)
        this.setState({ userExist: true })
    })
    axios.get(`/api/action-category/pledge/${pledge_id}`).then(Response => {
      const pledgeInfoPage = Response.data
      this.setState({
        pledgeInfo: pledgeInfoPage[0],
        pledgeInstructions: pledgeInfoPage[1],
        pledgeProsCons: pledgeInfoPage[2],
        pledgeResources: pledgeInfoPage[3],
        pledgeReferences: pledgeInfoPage[4]
      })

    }).catch(err => { console.log("0000", err) });

  }

  render() {
    const { userPledges, pledgeInfo, pledgeInstructions, pledgeProsCons, pledgeResources, pledgeReferences, userExist } = this.state

    return (
      <>
        {userExist ? <button>Cancel the pledge</button> : <buttton>Make the pledge</buttton>}        {
          !pledgeInfo.length ? <p>Loading...</p> :
            <>
              <div className="top-info">
                <img className="top-info__img" alt="pledge information" src={pledgeInfo[0].img} />
                <p className="top-info__title">{pledgeInfo[0].title}</p>
                <p className="top-info__description">{pledgeInfo[0].description}</p>
                <p className="top-info__number">{pledgeInfo[0].number_of_enrollement}</p>
              </div>

              <div className="importance-div">
                <h3>Why it`s important?</h3>
                <p>{pledgeInfo[0].importance}</p>
              </div>
              <h3>How to do it</h3>
              {pledgeInstructions.map((element, index) => {
                return (
                  <div>
                    <p>{element.description}</p>
                  </div>
                )
              })}
              <h3>Pros & cons of pledge</h3>
              {pledgeProsCons.map((element, index) => {
                return (
                  <div>
                    <p>{element.statement}</p>
                    <p>{element.color}</p>
                  </div>
                )
              })}
              <h3>Resources to help</h3>
              {pledgeResources.map((element, index) => {
                return (
                  <div>
                    <p>{element.description}</p>
                  </div>
                )
              })}
              <div>
                <h3>Further information</h3>
                <p>{pledgeInfo[0].further_info}</p>
              </div>
              <h3>References</h3>
              {pledgeReferences.map((element, index) => {
                return (
                  <div>
                    <p>{element.description}</p>
                  </div>
                )
              })}
            </>
        }
      </>
    )
  }
}
export default PledgePage