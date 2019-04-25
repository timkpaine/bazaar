import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {Link, Route, Switch} from 'react-router-dom'

import Settings from './Settings'
import Messages from './Messages'
import {userId, isAuthenticated} from './reducers'


class Profile extends Component {
  state = {
    activeTab: 'settings'
  }
  componentDidMount() {
    if(window.location.href.indexOf('settings')>0){
      this.setState({activeTab:'settings'})
    } else if(window.location.href.indexOf('messages')>0){
      this.setState({activeTab:'messages'})
    }
  }

  render() {
    if (!this.props.isAuthenticated){
       return <Redirect to='/' />
    }
    return (
        <div>
        <nav className="nav-wrapper blue">
          <ul id="nav-mobile" className="left">
            <li className={(this.state.activeTab === "settings") ? "active" : ""}
             onClick={()=> this.setState({activeTab:"settings"})}>
              <Link to="/profile/settings">Settings</Link>
            </li>
            <li className={(this.state.activeTab === "messages") ? "active" : ""}
             onClick={()=> this.setState({activeTab:"messages"})}>
              <Link to="/profile/messages">Messages</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/profile/settings" component={Settings} />
          <Route exact path="/profile/messages" component={Messages} />
        </Switch>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state),
  userId: userId(state)
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
