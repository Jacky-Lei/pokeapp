import constants from '../constants/constants'

const initialState = {
  name: '',
  pokemon: [],
  weakAgainst: [],
  strongAgainst: []
}

const pokeType = (state = initialState, action) => {
  switch (action.type) {
    case constants.RECEIVE_POKE_TYPE:
      return {
        ...state,
        ...action.data
      }
    default:
      return state
  }
}

const pokeTypeArray = (state = [], action) => {
  switch (action.type) {
    case constants.RECEIVE_POKE_TYPE:
      return [
        ...state,
        pokeType(undefined, action)
      ]
    default:
      return state
  }
}

export default pokeTypeArray
