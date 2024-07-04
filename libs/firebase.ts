// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqv_fBQ2wYKajynnUZyNqPVOFp4-S320g",
  authDomain: "nextjs-13f98.firebaseapp.com",
  projectId: "nextjs-13f98",
  storageBucket: "nextjs-13f98.appspot.com",
  messagingSenderId: "952917531132",
  appId: "1:952917531132:web:ca97ed98dd5107380bfa79",
  measurementId: "G-L8BEWS98JG",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;
