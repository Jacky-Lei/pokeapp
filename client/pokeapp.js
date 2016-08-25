// import stuff
// where the main component is run

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App';
import store from './store';

console.log(store)

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);