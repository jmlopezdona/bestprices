import {GoogleSignin} from 'react-native-google-signin-jmlopezdona'
import * as firebase from 'firebase'
import firebaseApp from '../../../utils/firebaseApp'

export const configureGoogleSignIn = () => {
  return new Promise((resolve, reject) => {
    GoogleSignin.hasPlayServices({ autoResolve: true }).then(() => {
      GoogleSignin.configure({
        webClientId: '824062900059-tjv770k40enuqbea3264ba8dpq3c2rq3.apps.googleusercontent.com'
      })
      .then(() => {
        resolve()
      });
    })
    .catch((err) => {
      console.log("Play services error", err.code, err.message);
      reject()
    })
  })
}

export const getUser = () => {
  return new Promise((resolve, reject) => {
    GoogleSignin.currentUserAsync()
    .then((user) => {
      resolve(user)
    })
    .catch((err) => {
      console.log("Error get user", err.code, err.message)
      reject()
    })
  })
}

export const login = () => {
  return new Promise((resolve, reject) => {
    GoogleSignin.signIn()
    .then((user) => {
      if (user.accessToken) {
        firebaseApp.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(null, user.accessToken))
      }
      resolve(user)
    })
    .catch((err) => {
      console.log('Wrong Singin', err);
      reject(err)
    })
  })
}

export const logout = () => {
  return new Promise((resolve, reject) => {
    GoogleSignin.signOut()
    .then(() => {
      resolve()
    })
    .catch((err) => {
      console.log('Wrong Logout', err);
      reject()
    });
  })
}
