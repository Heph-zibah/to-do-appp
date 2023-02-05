// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDd4v_UB7H2Gl6jJCnRMo-KrJ7_fmW_NII",
  authDomain: "frontend-todo-4cb33.firebaseapp.com",
  projectId: "frontend-todo-4cb33",
  storageBucket: "frontend-todo-4cb33.appspot.com",
  messagingSenderId: "79169180717",
  appId: "1:79169180717:web:cc8e0007271e85dbb214a4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)