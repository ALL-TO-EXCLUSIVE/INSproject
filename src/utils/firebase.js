// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-3254e.firebaseapp.com",
  projectId: "blog-3254e",
  storageBucket: "blog-3254e.appspot.com",
  messagingSenderId: "42360691190",
  appId: "1:42360691190:web:14139546669854ffddcfd7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);