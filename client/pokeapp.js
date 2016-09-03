// import stuff
// where the main component is run

var css = require('./styles/master.css');

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/Main';
import store from './store';

import 'bootstrap'

render (
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root')
);
