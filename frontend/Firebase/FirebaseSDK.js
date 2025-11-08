// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBH-3b0GftgLY6YzEKmJO_YY3em2zfoADU",
  authDomain: "shoppingmart-32493.firebaseapp.com",
  projectId: "shoppingmart-32493",
  storageBucket: "shoppingmart-32493.firebasestorage.app",
  messagingSenderId: "209883826892",
  appId: "1:209883826892:web:6a4fcc5b77a169005e9069"
};

// Initialize Firebase
const Fireapp = initializeApp(firebaseConfig);
export const db = getFirestore(Fireapp);

export default Fireapp;