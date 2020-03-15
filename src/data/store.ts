import { applyMiddleware, combineReducers, createStore } from "redux";

import { loggerMiddleware, ywMiddleware } from "./middleware";
import { login } from "./loginReducer";

const store = createStore(
    combineReducers({ login }),
    // {
    //     login: {
    //         username: ""
    //     }
    // },
    applyMiddleware(ywMiddleware, loggerMiddleware)
)

export default store;