/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "ADD_YOUR_API _KEY",
  authDomain: "clone",
  projectId: "clone-",
  storageBucket: "clone-",
  messagingSenderId: "1084",
  appId: "1:1084819935691:web:7dcb613038a0b7c8fc26",
  measurementId: "G-D4PLNQMD"
};

// Initialize Firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
