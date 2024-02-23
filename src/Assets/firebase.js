// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzs6UbE4_F0R9Y2DaN09Ob-bwUu0ub4Zo",
  authDomain: "netflixclone-e3ea3.firebaseapp.com",
  projectId: "netflixclone-e3ea3",
  storageBucket: "netflixclone-e3ea3.appspot.com",
  messagingSenderId: "304500669675",
  appId: "1:304500669675:web:011edb58adee235fbed2ae",
  measurementId: "G-GFF9EZY1Y7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();