import React from "react";
import { Link } from 'gatsby';
import fire from '../data/Fire';

import Layout from '../components/layout';

class Login extends React.Component {
  constructor (props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      user: {},
      email: '',
      password: '',
      uid: ''
    };
  }

  login (e) {
    e.preventDefault();
    //this is a function built into Firebase
    fire.auth().signInWithEmailAndPassword(this.state.email, 
      this.state.password).catch(function (error) {
      console.log('Login error: ' + error);
    });
  }

  signup (e) {
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,
      this.state.password).catch(function (error) {
      console.log('Sign up error: ' + error);
    });
  }

  handleChange (e) {
    this.setState({ [e.target.name]: e.target.value});
  }

  render () {
    return (
      <Layout>
        <h3>Log in </h3>
        <div >
          <form>
            <div className='login-form'>
              <label >Email</label>
              <input value={this.state.email} onChange={this.handleChange} type='email' 
                name='email' placeholder=' Enter email' />
            </div>
            <div className='login-form'>
              <label >Password</label>
              <input value={this.state.password} onChange={this.handleChange} type='password' 
                name='password' placeholder=' Password' />
            </div>
            <button type='submit' onClick={this.login} className='btn btn-primary'>Login</button>
            <button onClick={this.signup} style={{marginLeft: '25px'}} className='btn btn-success'>Signup</button>
          </form>
        </div>
      </Layout>
    );
  }
}

export default Login;
