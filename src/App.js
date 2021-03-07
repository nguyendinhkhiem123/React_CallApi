import React ,{ Component }from 'react';
import './App.css';
import Menu from './component/Menu';
import route from './route';
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';

class App extends Component {
    render(){
        return(
            <Router>
                <div>
                    <Menu></Menu>
                    {this.showRoute(route)}
                </div>
            </Router>
        )
    }
    showRoute = (route)=>{
        var res =null;
        if(route.length > 0){
            res = route.map((value,index)=>{
                return(
                  <Route
                  key ={index} 
                  path ={value.path}
                  exact ={value.exact}
                  component ={value.main}
                  >
                  </Route>
                );
            });
        }
    return <Switch>{res}</Switch>
    }
}

export default App;
