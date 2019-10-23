import React from "react"
import BackButton from '../BackButton'
import Footer from '../Footer'
import axios from 'axios'
import './style.css'

class PledgePage extends React.Component {

  state = {
    userPledges: [],
    pledgeInfo: [],
    pledgeInstructions: [],
    pledgeProsCons: [],
    pledgeResources: [],
    pledgeReferences: [],
    loading: true,
    pledge_id: ''
  }

  componentDidMount() {
    //set state pledge id coming from pressed pledge
    this.setState({ pledge_id: this.props.location.state })

    //make sure that user pledges and pledge info are brought successfully change the loading flag to false to start rendering the page
    const userPledges_pledgeInfo = Promise.all([this.getPledgeInfo(), this.getUserPledges()])
    userPledges_pledgeInfo.then((res) => {
      this.setState({ loading: false })
    }
    )
  }

  getPledgeInfo() {
    const { pledge_id } = this.props.location.state
    return axios.get(`/api/action-category/pledge/${pledge_id}`).then(Response => {
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
  getUserPledges() {
    const userId = 1;
    return axios.get(`/api/home/${userId}`).then(({ data }) => {
      this.setState({ userPledges: data })
    })
      .catch(error => {
        console.log("error", error);
      })
  }
  checkPledgeButton() {
    const { userPledges } = this.state
    //search for the id coming from props if it exists in user pledges list to define the button whether its cancel the pledge or make the pledge
    const buttonStatus = userPledges.filter((element) => {
      return element.pledge_id === this.props.location.state.pledge_id
    })
    //if the array size != 0 it means that that the id exists whichc means the user already made the pledge then the button will be cancel the pledge
    return buttonStatus.length !== 0;

  }

  addUserPledge() {
    const { pledge_id } = this.props.location.state
    const { history } = this.props
    const userId = 1; //this should change to take id from props
    // history.push({ pathname: `/${userId}/${pledge_id}/addPledge`, data: this.state.pledgeInfo })
    // i should recieve confirm from confirm page to setState pledgeExist
    this.setState(() => ({ pledgeExist: true, pledge_id }))
  }


  render() {
    const { pledgeInfo, pledgeInstructions, pledgeProsCons, pledgeResources, pledgeReferences, loading } = this.state
    const { history } = this.props
    const { pledge_id } = this.props.location.state

    return (
      <div className="container">
        <BackButton {...this.props} />
        {
          loading ? (<h2>Loading...</h2>) : (
            <>
              <div className="top-info">
                <img className="top-info__img" alt="pledge information" src={pledgeInfo[0].img} />

                {/* condition to change make/cancel the pledge button */}
                {this.checkPledgeButton() ?
                  <button className="top-info__make-cancel" value={pledge_id} onClick={() => history.push({ pathname: `/delete-pledge-confirmation/${pledge_id}`, pledge_name: pledgeInfo[0].title, pledge_image: pledgeInfo[0].img, handleChange: this.handlePledgeDeletionAddition })}>Cancel the pledge</button>
                  :
                  <button className="top-info__make-cancel" value={pledge_id} onClick={() => this.addUserPledge()}>Make the pledge</button>}


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
            </>)
        }
      </div>
    )
  }
}
export default PledgePage