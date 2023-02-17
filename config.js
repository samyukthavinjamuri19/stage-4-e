import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBmWb1whfRLOiaWl6ENtcQ9F4kwVMYZMy0",
    authDomain: "e-library-102ed.firebaseapp.com",
    projectId: "e-library-102ed",
    storageBucket: "e-library-102ed.appspot.com",
    messagingSenderId: "650112655970",
    appId: "1:650112655970:web:3cb831891d0f35f1da273b"
  };
  




firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


