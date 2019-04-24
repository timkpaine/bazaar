import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router'
import {login} from  './actions/auth'
import {authErrors, isAuthenticated} from './reducers'

class Register extends Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type ===
        'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  componentDidMount() {
    this.primaryInput.focus();
  }

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit(this.state.username, this.state.password)
    this.props.history.push('/')
  }

  render() {
    if (this.props.isAuthenticated){
       return <Redirect to='/' />
    }

    const errors = this.props.errors || {}

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <h3>Register</h3>
          {errors.non_field_errors?<h2 color="red">{errors.non_field_errors}</h2>:""}
          <input name="username" id="username" type="text" className="validate"
            ref={(input) => (this.primaryInput = input)} 
            onChange={this.handleInputChange} />
          <label htmlFor="username">Username</label>
          <span className="helper-text" data-error="wrong" data-success=""></span>

          <input name="password" id="password" type="password" className="validate"
            onChange={this.handleInputChange} />
          <label htmlFor="password">Password</label>
          <span className="helper-text" data-error="wrong" data-success=""></span>

          <input name="confirmpassword" id="confirmpassword" type="password" className="validate"
            onChange={this.handleInputChange} />
          <label htmlFor="confirmpassword">Confirm Password</label>
          <span className="helper-text" data-error="wrong" data-success=""></span>

          <br />
          <br />
          <button className="btn waves-effect waves-light" type="submit">Log In</button>
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
  onSubmit: (username, password) => {
    dispatch(login(username, password))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Register);
