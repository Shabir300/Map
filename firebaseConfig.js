// Optionally import the services that you want to use
// import {...} from "firebase/auth";
// import {...} from "firebase/database";
// import {...} from "firebase/firestore";
// import {...} from "firebase/functions";
// import {...} from "firebase/storage";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALS2HZ7_rN4aPxxwAAI_qcI9DGWlB_XnI",
  authDomain: "quran-mentor-36a5d.firebaseapp.com",
  projectId: "quran-mentor-36a5d",
  storageBucket: "quran-mentor-36a5d.appspot.com",
  messagingSenderId: "393971943258",
  appId: "1:393971943258:web:668ba57fe53d568d961563",
  measurementId: "G-WCF1EDE11X"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

  
// const analytics = getAnalytics(app);