import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAYhxwPDlsYgdiErhi6kPApS9O3xrfLWWI",
    authDomain: "techconnect-6e872.firebaseapp.com",
    projectId: "techconnect-6e872",
    storageBucket: "techconnect-6e872.appspot.com",
    messagingSenderId: "934407598566",
    appId: "1:934407598566:web:9e98e50823c1c5f27c6627",
    measurementId: "G-8L9LD0VQRW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };