import {combineReducers} from "redux";
import getAllToursReducer from "./getAllReducer"





export default combineReducers({
    allTours:getAllToursReducer
   
})