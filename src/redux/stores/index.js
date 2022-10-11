import {legacy_createStore as createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import initialState from "./initialState";
import rootReducer from "../reducers"


const middleware = applyMiddleware(thunk);

const store = createStore(rootReducer,initialState,composeWithDevTools(middleware));
export default store
