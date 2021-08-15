import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import rootReducer from './store/rootReducer';
import logger from 'redux-logger';

import './layout/_default.scss';
import './index.css';
import App from './App';

const store = createStore(
  rootReducer,
  applyMiddleware(logger)
);

ReactDOM.render(
  <BrowserRouter basename="/ip">
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
, document.getElementById('root')
);