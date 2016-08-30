// Holds pokemon of a certain pokeType and that pokeType's weaknesses &
// strengths, but used to display only the former

const initialState = {
  name: '',
  pokemon: [],
  weakAgainst: [],
  strongAgainst: []
}

const activeSubPokeType = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ACTIVE_SUB_POKE_TYPE':
    return {
      ...state,
      ...action.data
    }
    default:
      return state
  }
}

export default activeSubPokeType
