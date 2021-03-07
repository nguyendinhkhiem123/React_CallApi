import React ,{ Component }from 'react';
class Product extends Component {
    render(){
        var element =this.props.children
        return(    
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">

                        <div className="panel panel-danger">
                              <div className="panel-heading">
                                    <h3 className="panel-title">Danh Sách sản phẩm</h3>
                              </div>
                              <div className="panel-body">
                                    <table className="table  table-bordered table-hover">
                                        <thead>
                                            <tr>
                                                <th>STT</th>
                                                <th>Mã sản phẩm</th>
                                                <th>Tên sản phẩm</th>
                                                <th>Gía tiền</th>
                                                <th>trạng thái</th>
                                                <th>Hành động</th>
                                            </tr>
                                        </thead>
                                                {element}
                                    </table>
                              </div>
                        </div>
                        
                </div>
            </div>
        
        )
    }
}

export default Product;
