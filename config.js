import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBW5kzuJYNLshGskBrhh8xUy1xNI31utyM",
  authDomain: "book-santa-fd8bc.firebaseapp.com",
  projectId: "book-santa-fd8bc",
  storageBucket: "book-santa-fd8bc.appspot.com",
  messagingSenderId: "146872209988",
  appId: "1:146872209988:web:b0fb4713eee2e18e2ba211"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
