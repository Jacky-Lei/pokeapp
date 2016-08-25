import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/rootReducer'

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunkMiddleware)
);

export default store;
