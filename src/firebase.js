import firebase from 'firebase/app';
import 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBwni6Ffs4SUjPhlw9mgBhjsBE7aboefN0",
    authDomain: "think-piece-9fe1c.firebaseapp.com",
    databaseURL: "https://think-piece-9fe1c.firebaseio.com",
    projectId: "think-piece-9fe1c",
    storageBucket: "think-piece-9fe1c.appspot.com",
    messagingSenderId: "835891570330",
    appId: "1:835891570330:web:d4ceca4c014883adb4e123",
    measurementId: "G-H3QZSJVGYQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  window.firebase = firebase;

  export default firebase;