
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/index';
import App from './containers/App/App';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools())


ReactDOM.render(
  <Provider 
    store= {store}>
    <App />
  </Provider>,
  document.getElementById('root')
);