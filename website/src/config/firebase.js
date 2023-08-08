import firebase from "firebase/app";
require('firebase/auth')
// import { initializeApp } from "firebase/app";
// import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyA4POiJY7DQfubRvP2PaQgI37_1IHZT9p4",
  authDomain: "bioremedial-f8f51.firebaseapp.com",
  projectId: "bioremedial-f8f51",
  storageBucket: "bioremedial-f8f51.appspot.com",
  messagingSenderId: "785771841161",
  appId: "1:785771841161:web:26a98baf0791e69b79a858"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app)
