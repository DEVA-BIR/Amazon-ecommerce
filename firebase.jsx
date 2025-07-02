// firebase.js

// Import only what you need from Firebase SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBso8LKNG74_iI8wUl9gSzm3KlCcMVF0Mk",
  authDomain: "startup-b06b9.firebaseapp.com",
  projectId: "startup-b06b9",
  storageBucket: "startup-b06b9.firebasestorage.app",
  messagingSenderId: "725413664993",
  appId: "1:725413664993:web:99e0c75a685813f05ebfa0",
  measurementId: "G-THNTP02CBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export auth and firestore (modular syntax)
export const auth = getAuth(app);
export const db = getFirestore(app);
