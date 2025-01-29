// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPXboBgG27FOexXC1x2fmRrNNr1GM3II4",
  authDomain: "edumetrics-699ab.firebaseapp.com",
  projectId: "edumetrics-699ab",
  storageBucket: "edumetrics-699ab.firebasestorage.app",
  messagingSenderId: "1044640771649",
  appId: "1:1044640771649:web:0644163c81fd6c6c1ba0c0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);