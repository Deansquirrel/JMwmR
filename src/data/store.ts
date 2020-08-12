import { applyMiddleware, combineReducers, createStore } from 'redux';

import { loggerMiddleware, ywMiddleware } from './middleware';

import { test } from './model/ProductListModel';

const store = createStore(
  combineReducers({ test }),
  // {
  //     login: {
  //         username: ""
  //     }
  // },
  applyMiddleware(ywMiddleware, loggerMiddleware),
);

export default store;
