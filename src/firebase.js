// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4W81pF-g8J0Cy58kIolgWMzpVu0m_G08",
  authDomain: "todolist-83e97.firebaseapp.com",
  projectId: "todolist-83e97",
  storageBucket: "todolist-83e97.appspot.com",
  messagingSenderId: "598438467155",
  appId: "1:598438467155:web:1d72048c33d606f78298a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);