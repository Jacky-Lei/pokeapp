// Prevents multiple fetches from multiple clicks

const fetching = (state = { isFetching: false, isFetchingSub: false, error: '' }, action) => {
  switch (action.type) {
    case 'REQUESTING':
      return {
        ...state,
        isFetching: true,
        error: ''
      }
    case 'REQUESTING_SUB':
      return {
        ...state,
        isFetchingSub: true,
        error: ''
      }
    case 'ADD_ACTIVE_POKE_TYPE':
    case 'ADD_ACTIVE_SUB_POKE_TYPE':
      return {
        ...state,
        isFetching: false,
        isFetchingSub: false
      }
    case 'SPELLING_ERROR':
      return {
        ...state,
        isFetching: false,
        isFetchingSub: false,
        error: "Please ensure Pokemon name is spelled correctly."
      }
    case 'SERVER_ERROR':
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

// const fetching = (state = { isFetching: false }, action) => {
//   switch (action.type) {
//     case 'REQUESTING':
//       return {
//         ...state,
//         isFetching: true
//       }
//     case 'RECEIVE_POKE_TYPE':
//     case 'ADD_ACTIVE_POKE_TYPE':
//       return {
//         ...state,
//         isFetching: false
//       }
//     default:
//       return state
//   }
// }
//
// export default fetching

// can action creator dispatch twice?
