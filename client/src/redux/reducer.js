
const initialState = {
  userPledges: [],
  pledgeInfo: [],
  pledgeInstructions: [],
  pledgeProsCons: [],
  pledgeResources: [],
  pledgeReferences: [],
  loading: true
}

const reducer = (state = initialState, action) => {


  switch (action.type) {
    case 'GET_USER_PLEDGES':
      return {
        ...state,
        userPledges: action.userPledges
      }
    case 'GET_CATEGORY_PLEDGES':
      return {
        ...state,
        pledge_info: action.pledge_info,
        loading: false,
      }
    case 'GET_PLEDGE_INFO':

      return {
        ...state,
        pledgeInfo: action.pledgeInfo,
        pledgeInstructions: action.pledgeInstructions,
        pledgeProsCons: action.pledgeProsCons,
        pledgeResources: action.pledgeResources,
        pledgeReferences: action.pledgeReferences,
        loading: false
      }
    case 'LOADING':
      return {
        ...state,
        loading: true
      }
    default: return state
  }
}
export default reducer