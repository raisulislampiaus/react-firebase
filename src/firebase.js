import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyDjgcr5Q6q1-vw46vSE8RCWXNQZgk5c50I",
    authDomain: "piaus-1.firebaseapp.com",
    projectId: "piaus-1",
    storageBucket: "piaus-1.appspot.com",
    messagingSenderId: "2213244710",
    appId: "1:2213244710:web:28912392b38ef31d21dbe7",
    measurementId: "G-Q19MRMY22W"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  export {db, auth };