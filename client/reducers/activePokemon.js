import constants from '../constants/constants'
// Currently displayed Pokemon's state

const activePokemon = (state = {}, action) => {
  switch (action.type) {
    case constants.ADD_ACTIVE_POKEMON:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

export default activePokemon
