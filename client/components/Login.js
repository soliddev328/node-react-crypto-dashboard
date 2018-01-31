import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
/*eslint-disable*/
const mapStateToProps = store => ({
  authenticated: store.user.authenticated,
  signup: store.user.signup,
  error: store.user.error
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    signInUser: actions.signInUser,
    signUpUser: actions.signUpUser,
  }, dispatch)
};

// export here for testing connected component
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      registerUser: '',
      registerPassword: '',
      registerPassword2: '',
      email: '',
    };
    this.handleUser = this.handleUser.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleRegisterUser = this.handleRegisterUser.bind(this);
    this.handleRegisterPassword = this.handleRegisterPassword.bind(this);
    this.handleRegisterPassword2 = this.handleRegisterPassword2.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
  }

  handleUser(event) {
    this.setState({ username: event.target.value });
  }

  handlePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleRegisterUser(event) {
    this.setState({ registerUser: event.target.value });
  }

  handleRegisterPassword(event) {
    this.setState({ registerPassword: event.target.value });
  }

  handleRegisterPassword2(event) {
    this.setState({ registerPassword2: event.target.value });
  }

  handleEmail(event) {
    this.setState({ email: event.target.value });
  }

  submitForm(event) {
    event.preventDeault();
  }

  render() {
    console.log(this.state.username);
    console.log(this.state.password);
    return (
      <div className='login-page'>
        <div id='title'>
          cryptography
        </div>
        <div id='description'>
          track your cryptocurrency portfolio in one place
        </div>
        <div className='login'>
          <input className='username' onChange={event => this.handleUser(event)} type="text" placeholder="username" />
          <input className='password' onChange={event => this.handlePassword(event)} type="password" placeholder="password" />
          <button className='submit' onClick={() => this.props.signInUser(this.state)}>submit</button>
          {/* <Link to='/portfolio' id='forgot' >forgot password?</Link> */}
        </div>
        <div id='registration-section'>
          <hr />
          <div>Register</div>
          <div className='registration-form'>
            <input className='username' onChange={event => this.handleRegisterUser(event)} type="text" placeholder="username" />
            <input className='password' onChange={event => this.handleRegisterPassword(event)} type="password" placeholder="password" />
            <input className='password' onChange={event => this.handleRegisterPassword2(event)} type="password" placeholder="password" />
            <input className='username' onChange={event => this.handleEmail(event)} type="text" placeholder="email" />
            <button className='submit' onClick={() => this.props.signUpUser(this.state)}>submit</button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
