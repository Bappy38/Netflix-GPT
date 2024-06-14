// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlklERl4MzXKqy7jsDtEThKbQrVIYjgLQ",
  authDomain: "netflixgpt-54181.firebaseapp.com",
  projectId: "netflixgpt-54181",
  storageBucket: "netflixgpt-54181.appspot.com",
  messagingSenderId: "153336462381",
  appId: "1:153336462381:web:3e4971590ec1b137548ca4",
  measurementId: "G-WG27EC0ED0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);