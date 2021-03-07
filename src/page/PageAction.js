import React ,{ Component }from 'react';
import { Link } from 'react-router-dom';
import * as action from './../action/index';
import {connect} from 'react-redux';
class PageAction extends Component {
    constructor(props){
        super(props);
        this.state = {
            id : "",
            txtName : "",
            txtPrice : 0,
            txtStatus : false
        }
    }
    componentDidMount(){
        var match = this.props.match;
        if(match){
            var id = match.params.id;
            this.props.editProduct(id);
        }
    }
    componentWillReceiveProps(next){
        console.log(next);
        if(next && next.edit){
            this.setState({
                id : next.edit.id,
                txtName : next.edit.name,
                txtPrice :  next.edit.price,
                txtStatus :  next.edit.status
            })
        }
    }
    onChange = (event)=>{
        var target = event.target;
        var name =target.name;
        var value = target.type ==="checkbox" ? target.checked : target.value
        this.setState ({
            [name] : value
        })
    }
    subMit = (event)=>{
        event.preventDefault();
        var {history} = this.props;
        var id = this.state.id;
        
        var product = {
            id : id,
            name : this.state.txtName,
            price : parseInt(this.state.txtPrice,10),
            status : this.state.txtStatus
        }
        console.log(id);
        if(id){
            this.props.updateProduct(product);
        }
        else{
            this.props.addProduct(product);
        }
        history.goBack();
    }
    render(){
      
        return(  
           <div className="row ml-10">
               <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
               <h1>Thêm sản phẩm</h1>
                <form onSubmit ={this.subMit}>
                    <div className="form-group">
                        <label >Tên sản phẩm</label>
                        <input 
                            type="text" 
                            className="form-control" 
                            name  = "txtName"
                            value ={this.state.txtName}
                            onChange ={this.onChange}
                            />
                    </div>
                    <div className="form-group">
                        <label >giá</label>
                        <input type="text" 
                        className="form-control" 
                        name ="txtPrice"
                        value = {this.state.txtPrice}
                        onChange ={this.onChange}
                        />
                    </div>
                    <div className="form-group">
                        <label >Tráng thái</label>
                    </div>
                    
                    <div className="checkbox">
                        <label>
                            <input type="checkbox"
                            name = "txtStatus"
                            checked = {this.state.txtStatus}
                            onChange ={this.onChange}
                            />
                                Còn hàng
                        </label>
                    </div>
                    
                    <button type="submit" className="btn btn-primary mr-10">Đồng ý</button>
                    <Link to ="/product-list" type="submit" className="btn btn-danger">Trở lại</Link>
                </form>
               </div>
           </div>
           
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        edit : state.productEdit
    }
}
const mapDispatchToProps = (dispatch , props)=>{
    return {
        addProduct : (product)=>{
            dispatch(action.addProductRequest(product))
        }, 
        editProduct : (id) =>{
            dispatch(action.editProductRequest(id))
        },
        updateProduct : (product)=>{
            dispatch(action.updateProductRequest(product))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PageAction);