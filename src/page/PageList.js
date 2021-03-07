import React ,{ Component }from 'react';
import Product from './../component/Product';
import ProductItem from './../component/ProductItem';
import {connect} from 'react-redux';
import * as action from './../action/index';
import { Link } from 'react-router-dom';
class PageList extends Component {
    componentDidMount(){
            this.props.listAll();
    }
    showProduct = (product)=>{
        var res =null;
        if(product.length > 0){
            res = product.map((value,index)=>{
                return <ProductItem
                    key={index}
                    value ={value}
                    index ={index}
                    delete ={this.props.deleteProduct}
                >
                </ProductItem>
            })
        }
        return res
    }
    render(){
        var {product} =this.props;
        return(
            <div className="container">
            <Link type="button" className="btn btn-primary mb-10"
                to ="/product/add"
                >
                <span className ="fa fa-plus mr-10">
                </span>
                         Thêm sản phẩm
               </Link>
                        <Product>{this.showProduct(product)} </Product>
               </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return{
        product : state.product
    }
}
const mapDispatchToProps =(dispatch ,props)=>{
    return{
        listAll : ()=>{
            dispatch(action.listAllRequest())
        },
        deleteProduct : (id)=>{
            dispatch(action.deleteProductRequest(id))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(PageList);