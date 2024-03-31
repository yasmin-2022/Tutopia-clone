// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBghg8mdD_e92QvJnTlgHaxEpK1nQbwFq8",
  authDomain: "tutopia-clone.firebaseapp.com",
  projectId: "tutopia-clone",
  storageBucket: "tutopia-clone.appspot.com",
  messagingSenderId: "976371391809",
  appId: "1:976371391809:web:2119ab3ac3cbd7f25ed5c0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
