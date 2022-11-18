import { initializeApp } from "firebase/app";
import {
   getAuth,
   signInWithRedirect,
   signInWithPopup,
   GoogleAuthProvider,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword,
   signOut,
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

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
   prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
   signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
   signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocFromAuth = async (
   userAuth,
   additionalInformation = {}
) => {
   if (!userAuth) return;

   const userDocRef = doc(db, "users", userAuth.uid);
   const userSnapshot = await getDoc(userDocRef);

   if (!userSnapshot.exists()) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
         await setDoc(userDocRef, {
            displayName,
            email,
            createdAt,
            ...additionalInformation,
         });
      } catch (error) {
         console.log("error creating user", error.message);
      }
   }

   return userDocRef;
};

export const createUserDocWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;
   return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserDocWithEmailAndPassword = async (email, password) => {
   if (!email || !password) return;
   return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);
