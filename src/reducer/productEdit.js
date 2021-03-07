import * as type from './../type/ActionType';


var initState ={};
const myReducer = (state =initState,action)=>{
        switch(action.type){
            case type.EDIT_PRODUCT:
                return action.product
            default : return state
        }
}

export default myReducer;