import { applyMiddleware, combineReducers, createStore } from 'redux';

import { loggerMiddleware, ywMiddleware } from './middleware';

import { ProductListReducer } from '@/demo/ProductData';

const store = createStore(
  combineReducers({ ProductListReducer }),
  // {
  //     login: {
  //         username: ""
  //     }
  // },
  applyMiddleware(ywMiddleware, loggerMiddleware),
);

export default store;
