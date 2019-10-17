import React from "react"
import axios from 'axios'
class PledgePage extends React.Component {
  state = {
    pledgeInfo: [],
    pledgeInstructions: [],
    pledgeProsCons: [],
    pledgeResources: [],
    pledgeReferences: []
  }

  componentDidMount() {
    const { pledge_id } = this.props.location.state

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
    const { pledgeInfo, pledgeInstructions, pledgeProsCons, pledgeResources, pledgeReferences } = this.state

    return (
      <>
        {
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