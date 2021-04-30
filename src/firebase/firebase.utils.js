import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// You must replace the config with your own config object 
// The config object is how firebase knows that your application 
// is connected to your firebase account and database!
const config = {
    apiKey: "AIzaSyBqsAYUac_yN31KY9Z4fy4GBAMk4U3NFE4",
    authDomain: "crwn-db-37333.firebaseapp.com",
    projectId: "crwn-db-37333",
    storageBucket: "crwn-db-37333.appspot.com",
    messagingSenderId: "867490514941",
    appId: "1:867490514941:web:e06035abe179b1c38c7b94"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
