import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Link, BrowserRouter, Route, Switch} from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";

import Home from './components/Home'
import Cart from './components/Cart'
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Profile from './components/Profile';


import PrivateRoute from './components/PrivateRoute';
import { allItems, isAuthenticated} from './components/reducers'

class App extends Component {
    state = {
      activeMainTab: "shop"
    }

    componentDidMount() {
        var elem = document.querySelector("#mobile-nav");
        M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }

  render() {
    return (
       <BrowserRouter>
          <div className="App">
            <nav className="nav-wrapper teal">
            <ul id="mobile-nav" className="sidenav">
              <li className={(this.state.activeMainTab === "shop") ? "active" : ""}
               onClick={()=> this.setState({activeMainTab:"shop"})}>
                <Link to="/">shop</Link>
              </li>
              <li className={(this.state.activeMainTab === "cart") ? "active" : ""}
               onClick={()=> this.setState({activeMainTab:"cart"})}>
                <Link to="/cart">cart</Link>
              </li>
              {!this.props.isAuthenticated?
                <li className={(this.state.activeMainTab === "login") ? "active" : ""}
                 onClick={()=> this.setState({activeMainTab:"login"})}>
                  <Link to="/login">login</Link>
                </li>
                :
                <li className={(this.state.activeMainTab === "profile") ? "active" : ""}
                 onClick={()=> this.setState({activeMainTab:"profile"})}>
                  <Link to="/profile/settings">profile</Link>
                </li>
              }
              {!this.props.isAuthenticated?
                <li className={(this.state.activeMainTab === "register") ? "active" : ""}
                 onClick={()=> this.setState({activeMainTab:"register"})}>
                  <Link to="/register">register</Link>
                </li>
                :
                <li className={(this.state.activeMainTab === "logout") ? "active" : ""}
                 onClick={()=> this.setState({activeMainTab:"logout"})}>
                  <Link to="/logout">logout</Link>
                </li>
              }
            </ul>
              <div className="nav-wrapper">
                <Link to="/" className="brand-logo">bazaar</Link>
                <a href="" data-target="mobile-nav" className="sidenav-trigger">
                  <i className="material-icons">menu</i>
                </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                  <li className={(this.state.activeMainTab === "shop") ? "active" : ""}
                   onClick={()=> this.setState({activeMainTab:"shop"})}>
                    <Link to="/">shop</Link>
                  </li>
                  <li className={(this.state.activeMainTab === "cart") ? "active" : ""}
                   onClick={()=> this.setState({activeMainTab:"cart"})}>
                    <Link to="/cart">cart</Link>
                  </li>
                  {/* <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>*/}
                  {!this.props.isAuthenticated?
                    <li className={(this.state.activeMainTab === "login") ? "active" : ""}
                   onClick={()=> this.setState({activeMainTab:"login"})}>
                      <Link to="/login">login</Link>
                    </li>
                    :
                    <li className={(this.state.activeMainTab === "profile") ? "active" : ""}
                   onClick={()=> this.setState({activeMainTab:"profile"})}>
                      <Link to="/profile/settings">profile</Link>
                    </li>
                  }
                  {!this.props.isAuthenticated?
                    <li className={(this.state.activeMainTab === "register") ? "active" : ""}
                     onClick={()=> this.setState({activeMainTab:"register"})}>
                      <Link to="/register">register</Link>
                    </li>
                    :
                    <li className={(this.state.activeMainTab === "logout") ? "active" : ""}
                     onClick={()=> this.setState({activeMainTab:"logout"})}>
                      <Link to="/logout">logout</Link>
                    </li>
                  }
                </ul>
              </div>
            </nav>
            <Switch>
                {!this.props.isAuthenticated?
                  <Route exact path="/login" component={Login} />
                    :
                  <Route path="/profile" component={Profile} />
                }
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
