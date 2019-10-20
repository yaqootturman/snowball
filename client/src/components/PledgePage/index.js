import React from "react"
import AppContext from '../../UserContext';

import axios from 'axios'
class PledgePage extends React.Component {
  static contextType = AppContext
  addUserPledge() {
    const { pledge_id } = this.props.location.state
    const { history } = this.props
    const userId = 1; //this should change to take id from props

    history.push(`/${userId}/${pledge_id}/addPledge`)
    this.setState(() => ({ pledgeExist: true }))
  }

  deleteUserPledge() {

    const { pledge_id } = this.props.location.state

    const userId = 1; //this should change to take id from props
    axios.get(`/api/${userId}/${pledge_id}/deletePledge`).then(() => {

      this.setState(() => ({ pledgeExist: false }))
    }).catch(err => { console.log("axios err", err) })
  }
  state = {
    userPledges: [],
    pledgeInfo: [],
    pledgeInstructions: [],
    pledgeProsCons: [],
    pledgeResources: [],
    pledgeReferences: [],
    pledgeExist: false,
    pledge_id: ''
  }

  componentDidMount() {
    //to use context api in the function
    const userPledges = this.context
    this.setState({ userPledges })

    // compare between id which recieve from userPledges which recieve by context api and id from category to decide if user already mark the pledge or not
    const { pledge_id } = this.props.location.state
    userPledges.map((element) => {
      if (element.pledge_id === pledge_id)
        this.setState({ pledgeExist: true, pledge_id })
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
    const { userPledges, pledgeInfo, pledgeInstructions, pledgeProsCons, pledgeResources, pledgeReferences, pledgeExist } = this.state

    return (
      <>
        {
          !pledgeInfo.length ? <p>Loading...</p> :
            <>
              <div className="top-info">
                <img className="top-info__img" alt="pledge information" src={pledgeInfo[0].img} />

                {pledgeExist ? <button className="top-info__make-cancel" value={this.state.pledge_id} onClick={() => this.deleteUserPledge()}>Cancel the pledge</button> : <buttton className="top-info__make-cancel" value={this.state.pledge_id} onClick={() => this.addUserPledge()}>Make the pledge</buttton>}

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