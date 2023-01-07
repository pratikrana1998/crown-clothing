/* This library is JS library that extracts away some of the functionality that we need to use in order to interact with our instance of firebase - CRUD. */
import { initializeApp } from 'firebase/app';

/* For authentication */
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBBPv5r3dxGVv6Gz_oLVKTOvXUMlYsx5fw",
    authDomain: "crwn-pasty-db.firebaseapp.com",
    projectId: "crwn-pasty-db",
    storageBucket: "crwn-pasty-db.appspot.com",
    messagingSenderId: "1066272580269",
    appId: "1:1066272580269:web:26d121be6ff9fc043c9c24"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

/* For Google Authentication set-up.
    GoogleAuthProvider is essentially a class that we get from firebase authentication and is connected to google auth itself */
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithGooglePopup(auth, provider);