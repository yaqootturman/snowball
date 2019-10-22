import React from "react"
import axios from 'axios'
import Footer from '../Footer'
import './style.css'

class PledgePage extends React.Component {

  addUserPledge() {

    const { pledge_id } = this.props.location.state
    const { history } = this.props
    const userId = 1; //this should change to take id from props

    history.push({ pathname: `/${userId}/${pledge_id}/addPledge`, data: this.state.pledgeInfo })

    // i should recieve confirm from confirm page to setState pledgeExist
    // this.setState(() => ({ pledgeExist: true }))

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
    const { userPledges } = this.state
    const userId = 1;
    axios.get(`/api/home/${userId}`).then(({ data }) => {
      this.setState({ userPledges: data })
    })
      .catch(error => {
        console.log("error", error);
      })

    // compare between id which recieve from userPledges which recieve by context api and id from category to decide if user already mark the pledge or not
    const { pledge_id } = this.props.location.state
    userPledges.map((element) => {
      if (element.pledge_id === pledge_id)
        this.setState({ pledgeExist: true, pledge_id })
      return true
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
    this.getUserPledges()

  }

  getUserPledges() {
    const userId = 1;
    axios.get(`/api/home/${userId}`).then(({ data }) => {
      this.setState({ userPledges: data })
    })
      .catch(error => {
        console.log("error", error);
      })
  }

  render() {
    const { pledgeInfo, pledgeInstructions, pledgeProsCons, pledgeResources, pledgeReferences, pledgeExist } = this.state

    return (
      <>
        {
          !pledgeInfo.length ? <p>Loading...</p> :
            <>
              <div className="top-info">
                <img className="top-info__img" alt="pledge information" src={pledgeInfo[0].img} />
                {/* condition to change make/cancel the pledge  */}
                {pledgeExist ? <button className="top-info__make-cancel" value={this.state.pledge_id} onClick={() => this.deleteUserPledge()}>Cancel the pledge</button> : <button className="top-info__make-cancel" value={this.state.pledge_id} onClick={() => this.addUserPledge()}>Make the pledge</button>}

                <h2 className="top-info__title">{pledgeInfo[0].title}</h2>
                <p className="top-info__the-pledge-word">THE PLEDGE</p>
                <p className="top-info__description">{pledgeInfo[0].description}</p>
                <p className="top-info__pledgeS-already-word">PLEDGES ALREADY</p>
                <p className="top-info__number">{pledgeInfo[0].number_of_enrollement}</p>
              </div>

              <div className="importance-div">
                <h3>Why it`s important?</h3>
                {pledgeInfo[0].importance.split('..').map(i => {
                  return <>
                    <br /><p >{i}</p>
                  </>
                })}
              </div>

              <div className="how-do-div">
                <h3>How to do it</h3>
                {pledgeInstructions.map((element, index) => {
                  return (
                    <div className="how-do-div__element">
                      <span>{index + 1}.     </span>
                      <span>{element.description}</span>
                    </div>
                  )
                })}
              </div>
              <div className="pros-cons-div">
                <h3>Pros & cons of pledge</h3>
                {pledgeProsCons.map((element, index) => {
                  return (
                    <div className="pros-cons-div__element">
                      <div className={element.color}></div>
                      <span>{element.statement}</span>
                    </div>
                  )
                })}
              </div>
              <div className="resources-div">
                <h3>Resources to help</h3>
                {pledgeResources.map((element, index) => {
                  return (
                    <li className="resources-div__link">
                      <a href={element.link}> {element.description}</a>
                    </li>
                  )
                })}
              </div>
              <div className="further-information">
                <h3>Further information</h3>
                {pledgeInfo[0].further_info.split('..').map(i => {
                  return <>
                    <br /><p >{i}</p>
                  </>
                })}
              </div>

              <hr className="hr-element"></hr>

              <div className="references">
                <h3>References</h3>
                {pledgeReferences.map((element, index) => {
                  return (
                    <div className="references__element">
                      <span>{index + 1} . </span>
                      <a href={element.description}>{element.description}</a>
                    </div>
                  )
                })}
              </div>
              <Footer {...this.props} />
            </>
        }
      </>
    )
  }
}
export default PledgePage