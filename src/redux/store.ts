import { applyMiddleware, combineReducers, createStore } from 'redux';

import { loggerMiddleware, ywMiddleware } from './middleware';

import { ReducerLogin } from '@/pages/login/loginData';

const store = createStore(
  combineReducers({
    ReducerLogin,
  }),
  // {
  //     login: {
  //         username: ""
  //     }
  // },
  applyMiddleware(ywMiddleware, loggerMiddleware),
);

export default store;
