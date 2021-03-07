import * as type from './../type/ActionType';


var initState =[];
let findIndex = (state, id)=>{
    var res =null;
    if(state.length > 0){
        state.forEach((element,index)=> {
            if(element.id ===id){
                res = index;
            }
        });
    }
    return res;
}
const myReducer = (state =initState,action)=>{
        switch(action.type){
            case type.LIST_ALL :
                state = action.product;
                return [...state]
            case type.ADD_PRODUCT :
                state.push(action.product)
                return [...state]  
            case type.DELETE_PRODUCT :
                var index = findIndex(state , action.id);
                state.splice(index,1);
                 return [...state]
            case type.UPDATE_PRODUCT :
                var index = findIndex(state , action.product.id);
                state[index] = action.product;
                 return [...state]  
            default : return state
        }
}

export default myReducer;