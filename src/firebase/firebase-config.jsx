// export default {
//     apiKey: "AIzaSyC9zybRzJvJqPtECCWTNKLDuNiz2CvklTk",
//     authDomain: "react-portafolio-93053.firebaseapp.com",
//     databaseURL: "https://react-portafolio-93053-default-rtdb.firebaseio.com",
//     projectId: "react-portafolio-93053",
//     storageBucket: "react-portafolio-93053.appspot.com",
//     messagingSenderId: "371395991237",
//     appId: "1:371395991237:web:cadd610349c1d2c0cb42ac",
//     measurementId: "G-YK76HGF9K4"
// }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9zybRzJvJqPtECCWTNKLDuNiz2CvklTk",
  authDomain: "react-portafolio-93053.firebaseapp.com",
  projectId: "react-portafolio-93053",
  storageBucket: "react-portafolio-93053.appspot.com",
  messagingSenderId: "371395991237",
  appId: "1:371395991237:web:cadd610349c1d2c0cb42ac",
  measurementId: "G-YK76HGF9K4"
};

// Initialize Firebase

initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);