import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login';
import Register from './components/Register';
import Logout from './components/Logout';
import PrivateRoute from './components/PrivateRoute';
import { allItems, isAuthenticated} from './components/reducers'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            <nav className="nav-wrapper teal">
              <div className="container">
                <Link to="/" className="brand-logo">Bazaar</Link>
                <ul className="right">
                  <li><Link to="/">Shop</Link></li>
                  <li><Link to="/cart">Cart</Link></li>
                  <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                  {!this.props.isAuthenticated?
                    <li><Link to="/login">Login</Link></li>
                    :""}
                  {!this.props.isAuthenticated?
                    <li><Link to="/register">Register</Link></li>
                    :
                    <li><Link to="/logout">Logout</Link></li>
                  }
                </ul>
              </div>
            </nav>
            <Switch>
                {!this.props.isAuthenticated?
                  <Route exact path="/login" component={Login} />
                    :""}
                {!this.props.isAuthenticated?
                  <Route exact path="/register" component={Register} />
                  :
                  <Route exact path="/logout" component={Logout} />
                }
                <Route exact path="/" component={Home}/>
                <PrivateRoute exact path="/cart" component={Cart}/>
            </Switch>
            </div>
       </BrowserRouter>
      
    );
  }
}

const mapStateToProps = (state)=>{
  return {
    items: allItems(state),
    isAuthenticated: isAuthenticated(state)
  }
}

const mapDispatchToProps= (dispatch)=>{
  return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(App);
