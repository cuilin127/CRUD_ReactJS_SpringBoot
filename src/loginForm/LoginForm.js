import React, { Component } from 'react';
import axios from 'axios';
import './style.css'
class LoginForm extends Component {


  constructor(props) {
    super(props);
    this.state = {
      emailAddress: '',
      name: '',
      password: ''
    }
  }
  render() {
    return (
      <div className="loginForm">
        <label htmlFor='emailAddress'>Email address</label>
        <br />
        <input
          id='emailAddress'
          className='input'
          value={this.state.emailAddress}
          name="emailAddress"
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <label htmlFor='name'>Full Name</label>
        <br />
        <input
          id='name'
          className='input'
          value={this.state.name}
          name="name"
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <label htmlFor='password'>Password</label>
        <br />
        <input
          id='password'
          className='input'
          value={this.state.password}
          name="password"
          onChange={this.handleChange.bind(this)}
        />
        <br />
        <button onClick={this.doLogIn.bind(this)}>Sign Up</button>
      </div>
    );
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  doLogIn(e) {
    e.preventDefault();
    //console.log(this.state);
    const params = {
      email: this.state.emailAddress,
      name: this.state.name,
      password: this.state.password
    };
    console.log(params);

    axios.post('https://fs-task-manager-api.herokuapp.com/users', params, {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    )
      .then(response => {
        console.log("RESPONSE RECEIVED: ",response);
      })
      .catch((err) => {
        console.log("AXIOS ERROR: ", err);
      })
      
  }
}
export default LoginForm;
