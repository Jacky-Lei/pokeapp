import constants from '../constants/constants'
// Prevents multiple fetches from multiple clicks during loading and determines
// when loading gif is displayed

const initialState = {
  isFetching: false,
  isFetchingSub: false,
  error: ''
}

const fetching = (state = initialState, action) => {
  switch (action.type) {
    case constants.REQUESTING:
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case constants.REQUESTING_SUB:
      return {
        ...state,
        isFetchingSub: true,
        error: ''
      }
    case constants.ADD_ACTIVE_POKE_TYPE:
    case constants.ADD_ACTIVE_SUB_POKE_TYPE:
      return {
        ...state,
        isFetching: false,
        isFetchingSub: false
      }
    case constants.SPELLING_ERROR:
      return {
        ...state,
        isFetching: false,
        isFetchingSub: false,
        error: "Please ensure Pokemon name is spelled correctly."
      }
    case constants.SERVER_ERROR:
      return {
        ...state,
        isFetching: false,
        isFetchingSub: false,
        error: "There was a server error, please try again later."
      }
    default:
      return state
  }
}

export default fetching
