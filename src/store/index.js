import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// import devToolsEnhancer from 'remote-redux-devtools';
const store = createStore(
    rootReducer,
    storeEnhancers(applyMiddleware(thunk)));
export default store;


