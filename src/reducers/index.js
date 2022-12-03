import {createStore, combineReducers, applyMiddleware} from "redux";
import {reposReducer} from "./repos-reducer";
import thunk from "redux-thunk";
import {composeWithDevTools} from 'redux-devtools-extension';

const rootReducer = combineReducers({
    repos: reposReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));