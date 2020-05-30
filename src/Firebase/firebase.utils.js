import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA-jrmNNgDntQjLe1IcZJGIVua11Q9fgMk",
  authDomain: "music-stream-3f3d6.firebaseapp.com",
  databaseURL: "https://music-stream-3f3d6.firebaseio.com",
  projectId: "music-stream-3f3d6",
  storageBucket: "music-stream-3f3d6.appspot.com",
  messagingSenderId: "730945698157",
  appId: "1:730945698157:web:a61960d62e604dc5418264",
  measurementId: "G-YJJNN3X4DH"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {

    if(!userAuth) return;

    const userRef =  firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
      const { displayName , email} = userAuth;
      const createdAt = new Date();

      try{  
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData 
        })
         
      }catch(error) {
          console.log('error creating user',error.message);
      }
    }
    return userRef;
  } ;
  
  
  
firebase.initializeApp(config);

  

export const auth = firebase.auth();
export const firestore =firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt :'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

