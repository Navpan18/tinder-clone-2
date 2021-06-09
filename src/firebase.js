import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBb7rkaA7OJI5mJsrSCyxBAqoD2_UOrSy0",
  authDomain: "tinder-clone-nav.firebaseapp.com",
  projectId: "tinder-clone-nav",
  storageBucket: "tinder-clone-nav.appspot.com",
  messagingSenderId: "82391983804",
  appId: "1:82391983804:web:ac02568644bc922abb52b9",
  measurementId: "G-TS0SL4T5E5",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
