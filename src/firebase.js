import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBsh1PsvE1z38is9I81JlAoQhp0748BA8Q",
    authDomain: "messenger-clone-c2910.firebaseapp.com",
    databaseURL: "https://messenger-clone-c2910.firebaseio.com",
    projectId: "messenger-clone-c2910",
    storageBucket: "messenger-clone-c2910.appspot.com",
    messagingSenderId: "875015715540",
    appId: "1:875015715540:web:d823cc95e1f6db0b39d941",
    measurementId: "G-Q9KFK6921Y"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
export default db;
  