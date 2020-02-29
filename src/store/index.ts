import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from "~/reducers";
const composeEnhancers = compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
export default store;