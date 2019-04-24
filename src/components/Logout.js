import React, {Component} from 'react'
import { connect } from 'react-redux'
import {logout} from  './actions/auth'
import {authErrors, isAuthenticated} from './reducers'


class Logout extends Component {
  handleInputChange = (event) => {}

  componentDidMount() {
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit()
    // this.props.history.push('/')
  }

  render() {
    console.log('here')
    return (
      <div className="container center">
        <form onSubmit={this.onSubmit}>
          <h3>Logout</h3>
          <button className="btn waves-effect waves-light" type="submit">Log Out</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  errors: authErrors(state),
  isAuthenticated: isAuthenticated(state)
})

const mapDispatchToProps = (dispatch) => ({
  onSubmit: () => {
    dispatch(logout())
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout);