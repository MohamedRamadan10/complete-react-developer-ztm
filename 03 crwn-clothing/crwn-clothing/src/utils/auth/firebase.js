import { initializeApp } from "firebase/app";
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyAYauEYlL_oIzqTn4kMc1NRGIqwyToGVCk",
   authDomain: "crwn-clothing-db-8b1e6.firebaseapp.com",
   projectId: "crwn-clothing-db-8b1e6",
   storageBucket: "crwn-clothing-db-8b1e6.appspot.com",
   messagingSenderId: "1027060429978",
   appId: "1:1027060429978:web:bef7424f01c0c82bfe1b23",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
   prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocFromAuth = async (userAuth) => {
   const userDocRef = doc(db, "users", userAuth.uid);
   const userSnapshot = await getDoc(userDocRef);
   console.log(userSnapshot);
   console.log(userSnapshot.exists());
};
