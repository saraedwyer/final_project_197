import React from 'react';

import Layout from '../components/layout';
import fire from '../data/Fire';
import { Link } from 'gatsby';
import Login from './login';
import { Card, Alignment, Button, Divider, Navbar, NavbarDivider, NavbarGroup, NavbarHeading} from '@blueprintjs/core';

var functions = fire.functions();

var database = fire.database();
class App extends React.Component {
  
    constructor(props) {
      super(props);
      this.logout = this.logout.bind(this);
      this.authListener = this.authListener.bind(this);
      this.getUserWine = this.getUserWine.bind(this);
      this.state = {
        user: {},
        email: '',
        uid: '',
        wines: [],
        wids: [],
        uwines: []
      }
    }
  
    logout() {
      fire.auth().signOut(); //firebase function
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

          fire.firestore().collection('user_wines').where('uid', '==', this.state.uid).onSnapshot((snapshot) => {
            const vals = snapshot.docs;
            const wids = (vals.map((val) => {
              return val.data().wid;
            }));
            console.log(d)
            this.setState({ wids: wids});
          });
  
          fire.firestore().collection('wine').onSnapshot((snapshot) => {
            const vals = snapshot.docs;
            const wines = (vals.map((val) => {
              return val.data().brand;
            }));
            this.setState({ wines: wines});
          });
  
          this.getUserWine();
        } else {
          this.setState({ user: null, email: null, uid: null});
        }
      });
    }
  
    getUserWine () {
      fire.firestore().collection('wine').onSnapshot((snapshot) => {
        const wids = this.state.wids;
        const wine = snapshot.docs;
        const uwines = (wine.map((w) => {
          if (wids.indexOf(w.id.toString()) > -1) {
            return w.data().brand;
          } else { 
            return;
          }
        }));
  
        this.setState({uwines: uwines});
      });
    }
  render () {
    return (
      <Layout>
        <Navbar>
          <NavbarGroup align={ Alignment.RIGHT}>
            <Button minimal icon='user'> <Link to= '/profile'> Profile </Link> </Button>
            <Button minimal icon='cog' onClick = {this.logout}> Log Out</Button>
            <Button minimal icon='plus' onClick = {this.addWine}> Add Wine </Button>
          </NavbarGroup>
          <Divider />
        </Navbar>
        <div>
        <div align={Alignment.LEFT}>
          <h5> All Wines </h5>
          <div> {(this.state.wines).map((w, idx) => {
            return (<p key={idx}>{w}<Button minimal icon='plus' onClick = {this.addWine}> Delete </Button></p>);
          })} </div>
        </div>
        <div align={Alignment.RIGHT}>
          <h5> My Wines </h5>
          <div> {(this.state.uwines).map((w, idx) => {
            if (w !== undefined) {
              return (<p key={idx}>{w}<Button minimal icon='plus' onClick = {this.addWine}> Delete </Button></p>);
            } else {
              return (<div></div>);
            }
          })} 
          </div>   
        </div>      
      </div>
      <h5> Add to Wines </h5>
          <form>
            <div className='addwine-form'>
              <label >Brand</label>
              <input value={this.state.brand} onChange={this.handleChange} type='brand' 
                name='brand' placeholder=' Enter brand' />
            </div>
            <div className='addwine-form'>
              <label >Type</label>
              <input value={this.state.type} onChange={this.handleChange} type='type' 
                name='type' placeholder=' Enter type' />
            </div>
            <div className='addwine-form'>
              <label >Color</label>
              <input value={this.state.color} onChange={this.handleChange}
                name='color' placeholder=' Enter color' />
            </div>
            <button type='submit' onClick={this.addWine} className='btn btn-primary'>Add Wine</button>
          </form>
      </Layout>
    );
  }
}

export default App;