import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer';
import thunkMiddleware from 'redux-thunk';

import {pokemon} from './reducers/pokemon';

// const store = createStore(rootReducer, defaultStore, window.devToolsExtension && window.devToolsExtension());


const store = createStore(
  pokemon,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunkMiddleware)
);

export default store;
