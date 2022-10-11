import {
  GET_ALL_TOURS_SUCCESS,
  GET_ALL_TOURS_FAILED,
} from "../../actions/actionTypes";

const reducer =(state={},action)=>{
    switch(action.type){
        case GET_ALL_TOURS_SUCCESS:
            return {
                ...state,tours:action.payload
            };
            case GET_ALL_TOURS_FAILED:
                return {
                    ...state,tourError:action.payload
                };
                default:
                    return state

    }
}
export default reducer