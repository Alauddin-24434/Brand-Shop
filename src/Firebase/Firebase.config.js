// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXS7w4XNtgl10TXFIKZLpUEcFNAzOjBww",
  authDomain: "brandshop-react-project.firebaseapp.com",
  projectId: "brandshop-react-project",
  storageBucket: "brandshop-react-project.appspot.com",
  messagingSenderId: "538584557977",
  appId: "1:538584557977:web:e83e242047547cc3928b08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);