// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFBJOrXBQK89swYtpBUev0jsZnvmoL6j4",
  authDomain: "fir-recap2-9b125.firebaseapp.com",
  projectId: "fir-recap2-9b125",
  storageBucket: "fir-recap2-9b125.firebasestorage.app",
  messagingSenderId: "716602610506",
  appId: "1:716602610506:web:6364fcdf22f14f351aa7b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

