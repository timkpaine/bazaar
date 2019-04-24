import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cart from './components/Cart'
import Logout from './components/Logout';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
              <Navbar/>
                <Switch>
                    <Route exact path="/logout" component={Logout} />
                    <Route exact path="/cart" component={Cart}/>
                    <Route exact path="/" component={Home}/>
                  </Switch>
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
