// Prevents multiple fetches from multiple clicks

const fetching = (state = { isFetching: false, isFetchingSub: false }, action) => {
  switch (action.type) {
    case 'REQUESTING':
      return {
        ...state,
        isFetching: true
      }
    case 'REQUESTING_SUB':
      return {
        ...state,
        isFetchingSub: true
      }
    case 'ADD_ACTIVE_POKE_TYPE':
    case 'ADD_ACTIVE_SUB_POKE_TYPE':
      return {
        ...state,
        isFetching: false,
        isFetchingSub: false
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
