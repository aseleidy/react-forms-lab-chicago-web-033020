import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  // handleUsernameChange = (event) => {
  //   this.setState({
  //     username: event.target.value
  //   })
  // }

  // handlePasswordChange = (event) => {
  //   this.setState({
  //     password: event.target.value
  //   })
  // }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  } 

  handleSumbit = (event) => {
    event.preventDefault();

    if (this.state.username !== '' && this.state.password !== '') {
      this.props.handleLogin(this.state)
    } else {
      console.log('Please enter a username and password')
    }

    this.setState({
      username: '',
      password: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSumbit}>
        <div>
          <label>
            Username
            <input id="username" 
            name="username" 
            type="text" 
            value={this.state.username}
            onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" 
            name="password" 
            type="password" 
            value={this.state.password}
            onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
