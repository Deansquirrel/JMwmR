import { applyMiddleware, combineReducers, createStore } from "redux";

import { loggerMiddleware, ywMiddleware } from "./middleware";
import { login } from "./loginReducer";
import { menu } from "./menuReducer";

const store = createStore(
    combineReducers({ login, menu }),
    // {
    //     login: {
    //         username: ""
    //     }
    // },
    applyMiddleware(ywMiddleware, loggerMiddleware)
)

export default store;