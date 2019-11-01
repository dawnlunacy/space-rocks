
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './reducers/index';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './containers/App/App';
import './index.css';

const store = createStore(rootReducer, composeWithDevTools())


const router = (
  <Router>
    <Provider 
    store= {store}>
    <App />
  </Provider>
  </Router>
)
  ReactDOM.render(router, document.getElementById('root'));