import React, {Component} from 'react'
import { connect } from 'react-redux'
import {userId, isAuthenticated} from './reducers'

class Settings extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="section center">
        <span className="waves-effect waves-light">Username: </span>
        <span className="waves-effect waves-light">{this.props.userId}</span>
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


export default connect(mapStateToProps, mapDispatchToProps)(Settings);
