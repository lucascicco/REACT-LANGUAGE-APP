import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCcI2m-pQFec0gQlaryow5jjXhQ2kkop_Q",
    authDomain: "language-review.firebaseapp.com",
    databaseURL: "https://language-review.firebaseio.com",
    projectId: "language-review",
    storageBucket: "language-review.appspot.com",
    messagingSenderId: "689722455882",
    appId: "1:689722455882:web:32ec76a0427d2cd76c33b3",
    measurementId: "G-BC1X14FH3S"
  };

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };