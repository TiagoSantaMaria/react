
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD4jQWn_rLywpp9iVAtxbwvsIOWSp4r0Hg",
  authDomain: "miprimereccomerce.firebaseapp.com",
  projectId: "miprimereccomerce",
  storageBucket: "miprimereccomerce.appspot.com",
  messagingSenderId: "328693467542",
  appId: "1:328693467542:web:f6e6e388a177609ccbf5b7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);