import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import billit from './reducers/reducers'
import store from './store'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import 'typeface-roboto'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
