
import React from "react"
import BackButton from '../BackButton'
import Footer from '../Footer'
import './style.css'
import ClipLoader from 'react-spinners/ClipLoader'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUserPledges, getPledgeInfo } from '../../redux/actions'


class PledgePage extends React.Component {

  state = {
    pledgeInfo: [],
    pledge_id: '',
    serverError: ""
  }

  componentDidMount() {
    //set state pledge id coming from pressed pledge
    this.setState({ pledge_id: this.props.location.state })
    //make sure that user pledges and pledge info are brought successfully to change the loading flag to false to start rendering the page
    this.getPledgeInfo()
    this.getUserPledges()

  }

  getPledgeInfo() {
    const { pledge_id } = this.props.location.state
    this.props.getPledgeInfo(pledge_id);
  }
  getUserPledges() {
    const userId = 1;
    this.props.getUserPledges();
  }
  checkPledgeButton() {

    const buttonStatus = this.props.userPledges.filter((element) => {
      return element.pledge_id === this.props.location.state.pledge_id
    })
    //if the array size != 0 it means that that the id exists whichc means the user already made the pledge then the button will be cancel the pledge
    return buttonStatus.length !== 0;

  }

  addUserPledge() {
    const { pledge_id } = this.props.location.state
    const { history } = this.props
    const userId = 1; //this should change to take id from props
    history.push({ pathname: `/${userId}/${pledge_id}/addPledge`, data: this.state.pledgeInfo })
    // i should recieve confirm from confirm page to setState pledgeExist
  }
  cancelPledgeButton(pledge_id, pledgeInfo) {
    //store pledge info in session
    sessionStorage.setItem('pledgeInfo', JSON.stringify({ pledge_name: this.props.pledgeInfo[0].title, pledge_image: this.props.pledgeInfo[0].img }))

    const { history } = this.props
    history.push({ pathname: `/delete-pledge-confirmation/${pledge_id}`, pledge_name: this.props.pledgeInfo[0].title, pledge_image: this.props.pledgeInfo[0].img })
  }

  render() {

    const { serverError } = this.state
    const { pledge_id } = this.props.location.state

    return (

      <div className="container">
        {serverError !== "" ? <h1>{serverError}</h1> : (
          <>
            {
              this.props.loading ? (<div className="loading-spinner">
                <ClipLoader
                  className="loading-spinner__home"
                  sizeUnit={'px'}
                  size={80}
                  color={'#123abc'}
                />

              </div>) : (
                  <>
                    <BackButton {...this.props} />

                    <div className="top-info">
                      <img className="top-info__img" alt="pledge information" src={this.props.pledgeInfo[0].img} />

                      {/* condition to change make/cancel the pledge button */}
                      {this.checkPledgeButton() ?
                        <button className="top-info__make-cancel" value={pledge_id} onClick={() => this.cancelPledgeButton(pledge_id, this.props.pledgeInfo)}>Cancel the pledge</button>
                        :
                        <button className="top-info__make-cancel" value={pledge_id} onClick={() => this.addUserPledge()}>Make the pledge</button>}


                      <h2 className="top-info__title">{this.props.pledgeInfo[0].title}</h2>
                      <p className="top-info__the-pledge-word">THE PLEDGE</p>
                      <p className="top-info__description">{this.props.pledgeInfo[0].description}</p>
                      <p className="top-info__pledgeS-already-word">PLEDGES ALREADY</p>
                      <p className="top-info__number">{this.props.pledgeInfo[0].number_of_enrollement}</p>
                    </div>

                    <div className="importance-div">
                      <h3>Why it`s important?</h3>
                      {this.props.pledgeInfo[0].importance.split('..').map((element, index) => {
                        return <>
                          <br /><p key={index}>{element}</p>
                        </>
                      })}
                    </div>

                    <div className="how-do-div">
                      <h3>How to do it</h3>
                      {this.props.pledgeInstructions.map((element, index) => {
                        return (
                          <div className="how-do-div__element" key={index}>
                            <span>{index + 1}.     </span>
                            <span>{element.description}</span>
                          </div>
                        )
                      })}
                    </div>
                    <div className="pros-cons-div">
                      <h3>Pros & cons of pledge</h3>
                      {this.props.pledgeProsCons.map((element, index) => {
                        return (
                          <div className="pros-cons-div__element" key={index}>
                            <div className={element.color}></div>
                            <span>{element.statement}</span>
                          </div>
                        )
                      })}
                    </div>
                    <div className="resources-div">
                      <h3>Resources to help</h3>
                      {this.props.pledgeResources.map((element, index) => {
                        return (
                          <li className="resources-div__link" key={index}>
                            <a href={element.link}> {element.description}</a>
                          </li>
                        )
                      })}
                    </div>
                    <div className="further-information">
                      <h3>Further information</h3>
                      {this.props.pledgeInfo[0].further_info.split('..').map((element, index) => {
                        return <>
                          <br /><p key={index}>{element}</p>
                        </>
                      })}
                    </div>

                    <hr className="hr-element"></hr>

                    <div className="references">
                      <h3>References</h3>
                      {this.props.pledgeReferences.map((element, index) => {
                        return (
                          <div className="references__element" key={index}>
                            <span>{index + 1} . </span>
                            <a href={element.description}>{element.description}</a>
                          </div>
                        )
                      })}
                    </div>
                    <Footer {...this.props} />
                  </>)
            }
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    userPledges: state.userPledges,
    pledgeInfo: state.pledgeInfo,
    pledgeInstructions: state.pledgeInstructions,
    pledgeProsCons: state.pledgeProsCons,
    pledgeResources: state.pledgeResources,
    pledgeReferences: state.pledgeReferences,
    loading: state.loading
  }
}
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getUserPledges,
    getPledgeInfo,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PledgePage)

