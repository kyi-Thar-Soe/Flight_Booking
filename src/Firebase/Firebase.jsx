
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAwtHF5E3cx9nEONB_HTBvBO69YMHHpzM4",
  authDomain: "flightauth-76465.firebaseapp.com",
  projectId: "flightauth-76465",
  storageBucket: "flightauth-76465.appspot.com",
  messagingSenderId: "381934835317",
  appId: "1:381934835317:web:a90617f3b2ab93ccc50a3c",
  measurementId: "G-Q8Z77087L1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app);

