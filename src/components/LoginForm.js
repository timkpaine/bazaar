import React, {Component} from 'react'

export default class LoginForm extends Component {
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
    const errors = this.props.errors || {}

    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <h1>Login</h1>
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
          <br />
          <br />
          <button className="btn waves-effect waves-light" type="submit">Log In</button>
        </form>
      </div>
    )
  }
}