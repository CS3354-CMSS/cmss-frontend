import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBiOB1qVcGQ4ToS54xBHpi-yy3kuPUsNws",
    authDomain: "login-3e284.firebaseapp.com",
    projectId: "login-3e284",
    storageBucket: "login-3e284.appspot.com",
    messagingSenderId: "963865090247",
    appId: "1:963865090247:web:55aff670876094a465c6e2"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;