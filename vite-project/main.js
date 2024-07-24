// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBM6i8wkvaXbQrUeuQ9WdtO2d70gBmplMQ",
  authDomain: "daily-report-fc791.firebaseapp.com",
  projectId: "daily-report-fc791",
  storageBucket: "daily-report-fc791.appspot.com",
  messagingSenderId: "149858351679",
  appId: "1:149858351679:web:72bced97accf62b460d68a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Cloud Firestoreの初期化
const db = getFirestore(app);

