/// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB8Oi59yt0iDUCEFwXwcOB7pIdSyTCOHUE",
  authDomain: "clone-2f646.firebaseapp.com",
  projectId: "clone-2f646",
  storageBucket: "clone-2f646.appspot.com",
  messagingSenderId: "1084819935691",
  appId: "1:1084819935691:web:7dcb613038a0b7c8fc264e",
  measurementId: "G-D4PLNQMDCQ"
};

// Initialize Firebase


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();