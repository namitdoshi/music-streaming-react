import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD7KX4VdIr2TGWoi75wzCdevwzKIilu7zQ",
    authDomain: "stream-app-8f9b9.firebaseapp.com",
    databaseURL: "https://stream-app-8f9b9.firebaseio.com",
    projectId: "stream-app-8f9b9",
    storageBucket: "stream-app-8f9b9.appspot.com",
    messagingSenderId: "911287855784",
    appId: "1:911287855784:web:fc8cc417f99255290a709d",
    measurementId: "G-RS1Z6MS2RG"
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
  } 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt :'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;

