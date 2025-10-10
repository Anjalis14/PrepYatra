// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCF6UfbzkgRRoVXDxUVeJQ_aDhMfg_TvN8",
  authDomain: "prepyatra-cd7a8.firebaseapp.com",
  projectId: "prepyatra-cd7a8",
  storageBucket: "prepyatra-cd7a8.firebasestorage.app",
  messagingSenderId: "498769953085",
  appId: "1:498769953085:web:5098713f03a4727f06c554",
  measurementId: "G-YF1BJQKXP9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);