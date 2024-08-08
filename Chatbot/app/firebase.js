// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANWqAoySAkaht_lvVclUxj2MgPHT3GZT8",
    authDomain: "chatbot-67b1e.firebaseapp.com",
    projectId: "chatbot-67b1e",
    storageBucket: "chatbot-67b1e.appspot.com",
    messagingSenderId: "412693621670",
    appId: "1:412693621670:web:33b436cb85be2067597d67",
    measurementId: "G-MS9GCE7YMH"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);