const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();

  // componentDidMount() {
  //   fetch('https://api.globalwinescore.com/globalwinescores/latest/?wine_id=&vintage=&color=White&is_primeurs=&lwin=&lwin_11=&limit=&offset=&ordering=', {
  //     headers: {
  //       'Authorization': 'Token 2ab99eb0f97b526a98aaa23c1aca803248478b88'
  //     }
  //   })
  //   .then( res => res.json())
  //   .then(
  //     (result) => {
  //       this.setState({
  //         wine_data: result
  //       });
  //       console.log(result)
  //   },
  //   (error) => {
  //     console.log(error)
  //     this.setState({
  //       isLoaded: true,
  //       error
  //     })
  //   })
  // }

  
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
