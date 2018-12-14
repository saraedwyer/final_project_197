import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import fire from '../data/Fire';
import { Alignment, Button, Divider, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from '@blueprintjs/core';

class Profile extends React.Component {

  constructor (props) {
    super(props);
    this.authListener = this.authListener.bind(this);
    this.state = {
      user: {},
      email: '',
      uid: ''
    };
  }

  componentDidMount () {
    this.authListener();
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

  render () {
    return (
      <Layout>
        <Navbar>
          <NavbarGroup align={ Alignment.RIGHT}>
            <Button minimal icon='home'> <Link to= '/App'> Home </Link> </Button>
            <Button minimal icon='cog' onClick = {this.logout}> Log Out</Button>
          </NavbarGroup>
          <Divider />
        </Navbar>
        <div> Email: {this.state.email} </div>
        <div> UID: {this.state.uid} </div>
      </Layout>
    );
  }
}

export default Profile;