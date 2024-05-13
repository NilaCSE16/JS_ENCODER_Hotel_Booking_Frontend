// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGiT8LhGoxaIC5nuKqxbiQ9ErLZipr3xg",
  authDomain: "js-encoder.firebaseapp.com",
  projectId: "js-encoder",
  storageBucket: "js-encoder.appspot.com",
  messagingSenderId: "1075680420018",
  appId: "1:1075680420018:web:78e070a803df9475c469ab",
};

// Initialize Firebase

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
