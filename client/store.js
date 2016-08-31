import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
import * as actions from './actions/actionCreators'
import { formatPokemonData, formatDescription, formatPokeType } from './helpers/helpers'
import fetch from 'isomorphic-fetch'
import { promiseErrorMiddleware, dataTrafficMiddleware } from './middleware/middlewares'



const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunkMiddleware, promiseErrorMiddleware, dataTrafficMiddleware)
);

export default store;
