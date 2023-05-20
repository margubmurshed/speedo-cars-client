// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjw4ajlGuGQ5Wq8j-Lj4KBoVRAN1Yjqhg",
  authDomain: "speedo-cars.firebaseapp.com",
  projectId: "speedo-cars",
  storageBucket: "speedo-cars.appspot.com",
  messagingSenderId: "817778237223",
  appId: "1:817778237223:web:6a7ebd5859c1f3d1c59302"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);