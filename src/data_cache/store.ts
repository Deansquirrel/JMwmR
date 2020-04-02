import { applyMiddleware, combineReducers, createStore } from 'redux';

import { loggerMiddleware, ywMiddleware } from './middleware';
import { user } from './user';
import { menu } from './menu';

const store = createStore(
  combineReducers({ user, menu }),
  // {
  //     login: {
  //         username: ""
  //     }
  // },
  applyMiddleware(ywMiddleware, loggerMiddleware),
);

export default store;
