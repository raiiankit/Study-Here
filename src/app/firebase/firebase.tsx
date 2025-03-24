import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMl1oixYsxNnI9V4-2FCVynFDydbFPEPM",
  authDomain: "study-here-81d90.firebaseapp.com",
  projectId: "study-here-81d90",
  storageBucket: "study-here-81d90.appspot.com",  // Fix the incorrect storage bucket URL
  messagingSenderId: "921519160092",
  appId: "1:921519160092:web:ce474053bf0bf749b598d9",
  measurementId: "G-89H34X4698",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);  // Initialize Firebase Auth

export { app, auth };  // Export both app and auth
