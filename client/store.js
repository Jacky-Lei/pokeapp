import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import thunkMiddleware from 'redux-thunk'
import { promiseErrorMiddleware, dataTrafficMiddleware } from './middleware/middlewares'

const store = createStore(
  rootReducer,
  window.devToolsExtension && window.devToolsExtension(),
  applyMiddleware(thunkMiddleware, promiseErrorMiddleware, dataTrafficMiddleware)
)

export default store;
