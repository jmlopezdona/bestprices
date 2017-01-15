import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCOtIToIOpUBh2UYyeFyQoww8yQi_EvW5M",
  authDomain: "bestprices-4a1c5.firebaseapp.com",
  databaseURL: "https://bestprices-4a1c5.firebaseio.com",
  storageBucket: "bestprices-4a1c5.appspot.com",
  messagingSenderId: "824062900059"
}

const firebaseApp = firebase.initializeApp(config);

export default firebaseApp;
