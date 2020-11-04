import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


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
  export const auth = firebase.auth();

  export const provider = new firebase.auth.GoogleAuthProvider();
  export const signInWithGoogle  = () => auth.signInWithPopup(provider);
  
  window.firebase = firebase;

  export const createUserProfileDocument = async (user, additionalData) =>{
    if(!user) return; //No user passed
 
    // Get a referance to the place in the database where a user profile might be
    const userRef = firestore.doc(`users/${user.uid}`);

    //Go and fetch the document from location 
    const snapshot = await userRef.get();

    if(!snapshot.exists){
        const {displayName, email, photoURL} = user;
        const createdAt = new Date();
        try{
            await userRef.set({
              displayName,
              email,
              photoURL,
              createdAt,
              ...additionalData,
            })
        }catch(error){
          console.error('Error creating user', error);
        }
    }
     
    return getUserDocument(user.uid);
  }

  export const getUserDocument = async (uid) =>{
    if(!uid) return null;
    try{
      const userDocument = await firestore.collection('users').doc(uid).get();

      return {uid, ...userDocument.data()};
    }catch(error){
      console.error(`Error fetching user`, error);
    }
  }

  export default firebase;