import React from 'react';
import { Link } from 'gatsby';
import fire from '../data/Fire';
import Login from './login';
import App from './app';

// import Layout from '../components/layout'
//** This is the root component */
import Image from '../components/image';

class IndexPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {},
      email: '',
      uid: ''
    };
    this.authListener = this.authListener.bind(this);
  }

  authListener () {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          user: user,
          email: user.email,
          uid: user.uid
        });
      } else {
        this.setState({ user: null, email: null, uid: null});
      }
    });
  }

  componentDidMount () {
    this.authListener();
  }
  
  render () {
    return (
      <div>
        {this.state.user ? (< App />) : (<Login/>)}
      </div>
    );
  }
}

export default IndexPage;
