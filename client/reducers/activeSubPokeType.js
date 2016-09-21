import constants from '../constants/constants'
// Holds pokemon of a certain pokeType and that pokeType's weaknesses &
// strengths, but used to display only the former (as opposed to activePokeType)

const initialState = {
  name: '',
  pokemon: [],
  weakAgainst: [],
  strongAgainst: []
}

const activeSubPokeType = (state = initialState, action) => {
  switch (action.type) {
    case constants.ADD_ACTIVE_SUB_POKE_TYPE:
    return {
      ...state,
      ...action.data
    }
    case 'CLEAR_SUB_POKE_TYPE':
    return {
      ...state,
      name: '',
      pokemon: [],
      weakAgainst: [],
      strongAgainst: []
    }
    default:
      return state
  }
}

export default activeSubPokeType
