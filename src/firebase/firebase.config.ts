// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDeBHaJWvhPeiCMb6ZU2WSfZVdsu0CvIMY",
  authDomain: "book-catalog-3590a.firebaseapp.com",
  projectId: "book-catalog-3590a",
  storageBucket: "book-catalog-3590a.appspot.com",
  messagingSenderId: "853987436489",
  appId: "1:853987436489:web:8c0bac69d300b8a101aa18",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
