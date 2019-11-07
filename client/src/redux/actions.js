
import axios from 'axios'

// redux is sync so i need async to deal with api
export const getUserPledges = () => async (dispatch) => {

  let userId = 1;
  const response = await axios.get(`/api/home/${userId}`)

  const userPledges = response.data

  dispatch({
    type: 'GET_USER_PLEDGES',
    userPledges
  })
}

export const getPledgeInfo = (pledge_id) => async (dispatch) => {

  dispatch({
    type: 'LOADING'
  })

  const response = await axios.get(`/api/action-category/pledge/${pledge_id}`)

  const pledgeInfoPage = response.data

  const pledgeInfo = pledgeInfoPage[0]

  const pledgeInstructions = pledgeInfoPage[1]
  const pledgeProsCons = pledgeInfoPage[2]
  const pledgeResources = pledgeInfoPage[3]
  const pledgeReferences = pledgeInfoPage[4]

  dispatch({
    type: 'GET_PLEDGE_INFO',
    pledgeInfo,
    pledgeInstructions,
    pledgeProsCons,
    pledgeResources,
    pledgeReferences,

  })
}