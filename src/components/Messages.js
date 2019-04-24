import React, {Component} from 'react'
import { connect } from 'react-redux'
import {userId, isAuthenticated} from './reducers'

class Messages extends Component {
  render() {
    console.log(this.props)
    return (
      <div className="section center">
        <span className="waves-effect waves-light">Messages</span>
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


export default connect(mapStateToProps, mapDispatchToProps)(Messages);
