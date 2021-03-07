import React ,{ Component }from 'react';
import {Route, Link} from 'react-router-dom';


var menu =[
    {
        label : 'Trang chủ',
        exact : true,
        to : '/'
    },
    {
        label : 'Danh sách sản phẩm',
        exact : false,
        to : '/product-list'
    }
]

const MenuLink =({label ,to , exact})=>{
    return(
        <Route path = {to} exact = {exact} children ={({match})=>{
            var active = match ? "active": "";
            return(
                <li className={active}>
                    <Link to ={to}  >{label}</Link>
            </li>
            )
        }}
        ></Route>
    )
}
class Menu extends Component {
    render(){
        return(
            <nav className="navbar navbar-inverse">
            <a className="navbar-brand" >API</a>
            <ul className="nav navbar-nav">
                    {this.showMenu(menu)}
            </ul>
        </nav> 
        )
    }
    showMenu = (menu)=>{
        var res =null;
        if(menu.length > 0){
            res = menu.map((value,index)=>{
                return(
                <MenuLink 
                key ={index}
                label ={value.label} 
                to ={value.to}
                exact ={value.exact} 
                ></MenuLink>
                )
            });
        }
        return res;
    }
}

export default Menu;
