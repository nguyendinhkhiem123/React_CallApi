import * as type from './../type/ActionType';
import ApiCaller from './../utils/ApiCaller';


const listAll = (product)=>{
    return{
        type : type.LIST_ALL,
        product
    }
}

export const listAllRequest = ()=>{
    return dispatch =>{
        return ApiCaller('product','get', null).then(res=>{
            dispatch(listAll(res.data))
        });
    }
}

const addProduct = (product)=>{
    return{
        type : type.ADD_PRODUCT,
        product
    }
}
export const addProductRequest = (product)=>{
    return dispatch  =>{
        return ApiCaller('product','post',product).then(res=>{
            dispatch(addProduct(product))
        })
    }
}

const deleteProduct = (id)=>{
    return {
        type : type.DELETE_PRODUCT,
        id
    }
}
export const deleteProductRequest = (id)=>{
    return dispatch =>{
        return ApiCaller(`product/${id}`,'delete',null).then(res=>{
            dispatch(deleteProduct(id));
        })
    }
}
const editProduct = (product)=>{
    return {
        type : type.EDIT_PRODUCT,
        product
    }
}
export const editProductRequest = (id)=>{
    return dispatch =>{
        return ApiCaller(`product/${id}`,'get',null).then(res=>{
            dispatch(editProduct(res.data))
        })
    }
}
const updateProduct = (product)=>{
    return {
        type : type.EDIT_PRODUCT,
        product
    }
}
export const updateProductRequest = (product)=>{
    return dispatch =>{
        return ApiCaller(`product/${product.id}`,'put',product).then(res=>{
            dispatch(updateProduct(product))
        })
    }
}