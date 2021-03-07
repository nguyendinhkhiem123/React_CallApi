import { combineReducers }  from 'redux'
import product from './product';
import productEdit from './productEdit';

const myReducer = combineReducers({
    product,
    productEdit
});

export default myReducer;