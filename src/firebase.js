import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCVrXG_CjWu8E3-nhyYNkIjPzy1y_EweOY',
  authDomain: 'tinder-clone-50fbc.firebaseapp.com',
  databaseURL: 'https://tinder-clone-50fbc.firebaseio.com',
  projectId: 'tinder-clone-50fbc',
  storageBucket: 'tinder-clone-50fbc.appspot.com',
  messagingSenderId: '547808996666',
  appId: '1:547808996666:web:4e5f4eed411b0118ac3403',
  measurementId: 'G-ZR8YTBXW21',
})

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export {db, auth}
