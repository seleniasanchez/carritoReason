// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQe6sEejXZRg5WNKLN5UNLgx31gMktEOY",
  authDomain: "reasoncoder.firebaseapp.com",
  projectId: "reasoncoder",
  storageBucket: "reasoncoder.appspot.com",
  messagingSenderId: "12350456786",
  appId: "1:12350456786:web:42d7c1d0964b4e1280be0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
