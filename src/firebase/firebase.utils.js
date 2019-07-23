import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCqjQKDJt1Gd1XCRbiV3ZikqKH-c6uL5Q0",
  authDomain: "myawesomedevblog.firebaseapp.com",
  databaseURL: "https://myawesomedevblog.firebaseio.com",
  projectId: "myawesomedevblog",
  storageBucket: "",
  messagingSenderId: "525143004963",
  appId: "1:525143004963:web:be89d598cf19d164"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account " });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
