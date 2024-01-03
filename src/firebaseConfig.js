// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
//import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDn_dmu7C6mO2n9htgBtwW7cPArlrZmD1g",
  authDomain: "react-auth-bookapp.firebaseapp.com",
  projectId: "react-auth-bookapp",
  storageBucket: "react-auth-bookapp.appspot.com",
  messagingSenderId: "610077748509",
  appId: "1:610077748509:web:7ecf4b5327cde2c49c85f4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const auth=getAuth(app)
export default app