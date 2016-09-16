const initialState = {
  number: '',
  name: '',
  pokeType: '',
  weight: '',
  height: ''
}

const pokemon = (state = initialState, action) => {
  switch (action.type) {
    case 'RECEIVE_POKEMON':
      return {
        ...state,
        ...action.data
      }
    case 'RECEIVE_POKEMON_DESCRIPTION':
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
      case 'RECEIVE_POKEMON':
        return [
          ...state,
          pokemon(undefined, action)
        ]
      case 'RECEIVE_POKEMON_DESCRIPTION':
        return state.map((p) => pokemon(p, action))
      default:
        return state
    }
}

export default pokemonArray
