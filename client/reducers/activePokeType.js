// Holds pokemon of a certain pokeType and that pokeType's weaknesses &
// strengths, but used to display only the latter (as opposed to activeSubPokeType)

const initialState = {
  name: '',
  pokemon: [],
  weakAgainst: [],
  strongAgainst: []
}

const activePokeType = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACTIVE_POKE_TYPE':
    return {
      ...state,
      ...action.data
    }
    default:
      return state
  }
}

export default activePokeType
