import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import billit from './reducers/reducers'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto'
import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  billit,
  applyMiddleware(logger)
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
registerServiceWorker();
