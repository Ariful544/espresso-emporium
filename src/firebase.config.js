// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUOjHT__pCvaNcuJnrnDPCJCxSHs-uFGk",
  authDomain: "espresso-emporium-45904.firebaseapp.com",
  projectId: "espresso-emporium-45904",
  storageBucket: "espresso-emporium-45904.firebasestorage.app",
  messagingSenderId: "518604770126",
  appId: "1:518604770126:web:e04a5aa098a6524520ac1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;