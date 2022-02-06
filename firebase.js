// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {GoogleAuthProvider, getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwgoLvaHJInrJ7k0VvWhQWVNi5s6EDPas",
  authDomain: "uber-next-clone-d0fb4.firebaseapp.com",
  projectId: "uber-next-clone-d0fb4",
  storageBucket: "uber-next-clone-d0fb4.appspot.com",
  messagingSenderId: "998377973270",
  appId: "1:998377973270:web:00e30fc3063df2a02df737",
  measurementId: "G-LWXXWG16L2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth();
export {app, provider, auth, analytics};