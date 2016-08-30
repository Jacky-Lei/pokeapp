const initialState = {
  name: '',
  pokemon: [],
  weakAgainst: [],
  strongAgainst: []
}

const pokeType = function (state = initialState, action) {
  switch (action.type) {
    case 'RECEIVE_POKE_TYPE':
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

const pokeTypeArray = function (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_POKE_TYPE':
      return [
        ...state,
        pokeType(undefined, action)
      ]
    default:
      return state
  }
}

export default pokeTypeArray