import constants from '../constants/constants'

const initialState = {
  number: '',
  name: '',
  pokeType: '',
  weight: '',
  height: ''
}

const pokemon = (state = initialState, action) => {
  switch (action.type) {
    case constants.RECEIVE_POKEMON:
      return {
        ...state,
        ...action.data
      }
    case constants.RECEIVE_POKEMON_DESCRIPTION:
      if (state.name !== action.data.name){
        return state
      }
      return {
        ...state,
        ...action.data
      }
  }
}

const pokemonArray = (state = [], action) => {
    switch (action.type) {
      case constants.RECEIVE_POKEMON:
        return [
          ...state,
          pokemon(undefined, action)
        ]
      case constants.RECEIVE_POKEMON_DESCRIPTION:
        return state.map((p) => pokemon(p, action))
      default:
        return state
    }
}

export default pokemonArray
