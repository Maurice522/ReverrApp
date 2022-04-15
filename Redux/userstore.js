import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import userReducer from "./reducers";

const rootReducer = combineReducers({userReducer});

export const userStore = createStore(rootReducer, applyMiddleware(thunk));