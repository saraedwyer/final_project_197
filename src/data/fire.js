import firebase from 'firebase';

// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBSye0DmtlBmP4iW4erw9yVCfbF0UWTiik',
  authDomain: 'final-project-197.firebaseapp.com',
  databaseURL: 'https://final-project-197.firebaseio.com',
  projectId: 'final-project-197',
  storageBucket: 'final-project-197.appspot.com',
  messagingSenderId: '531553477231'
};


const fire = firebase.initializeApp(config);
const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true};
firestore.settings(settings); 


export default fire;