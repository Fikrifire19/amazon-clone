import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAyL4WMzMNFgFYAdBkaGQ8Vyp3-a8Ue5C0",
    authDomain: "clone-92068.firebaseapp.com",
    databaseURL: "https://clone-92068.firebaseio.com",
    projectId: "clone-92068",
    storageBucket: "clone-92068.appspot.com",
    messagingSenderId: "510495189994",
    appId: "1:510495189994:web:1a27ef125ee4baba826093",
    measurementId: "G-K5S0R6QKQ3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};