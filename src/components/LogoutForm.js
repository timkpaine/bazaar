import React, {Component} from 'react'

export default class LogoutForm extends Component {
  state = {
    username: '',
    password: ''
  }

  handleInputChange = (event) => {}

  componentDidMount() {}

  onSubmit = (event) => {
    event.preventDefault()
    this.props.onSubmit()
    this.props.history.push('/')
  }

  render() {
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