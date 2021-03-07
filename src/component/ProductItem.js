import React ,{ Component }from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
    delete = (id)=>{
        if(confirm("bạn có chắc chắn xóa")){ // eslint-disable-line
            this.props.delete(id);
        }
    }
    render(){
        var {index,value} = this.props;
        return(
            <tbody>
                <tr>
                    <td>{index + 1}</td>
                    <td>{value.id}</td>
                    <td>{value.name}</td> 
                    <td>{value.price}</td>
                    <td>
                        <span className=   {value.status ? "label label-success" : "label label-danger"}>
                            {value.status ? "còn hàng" : "hết hàng"}
                            </span>  
                    </td>
                    <td>
                        <button type="button" className="btn btn-danger mr-10" onClick ={()=>this.delete(value.id)}>Xóa</button>
                        <Link to ={`product/${value.id}/edit`}  type="button" className="btn btn-default">Sửa</Link>
                    </td>
            </tr>
            </tbody>
        );
    }
}

export default ProductItem;