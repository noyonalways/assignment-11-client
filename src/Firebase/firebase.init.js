// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvZMFR4xTZcUxAbkbfJ6PbMF38UQbRPhg",
  authDomain: "arredo-warehouse.firebaseapp.com",
  projectId: "arredo-warehouse",
  storageBucket: "arredo-warehouse.appspot.com",
  messagingSenderId: "147991214071",
  appId: "1:147991214071:web:f9e9bf673ee61322eee0f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
