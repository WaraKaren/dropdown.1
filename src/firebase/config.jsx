import firebase from 'firebase/compat/app'; // Para Firebase versiones 9 y superiores
import 'firebase/compat/firestore'; // Para Firestore


const firebaseConfig = {
  apiKey: "AIzaSyD2Aeg2eErOKrcUVdHJ8-uCZliTkKY6LAM",
  authDomain: "database-bed88.firebaseapp.com",
  projectId: "database-bed88",
  storageBucket: "database-bed88.appspot.com",
  messagingSenderId: "619162488911",
  appId: "1:619162488911:web:2e5d3f1a44d19f8157da3a"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const projectFirestore = app.firestore();
