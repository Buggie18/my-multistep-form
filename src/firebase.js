// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGxO9dDUaDwWoArzNjEnzvvRXLVXIFWLA",
  authDomain: "emotion-tracking-b4f1f.firebaseapp.com",
  projectId: "emotion-tracking-b4f1f",
  storageBucket: "emotion-tracking-b4f1f.firebasestorage.app",
  messagingSenderId: "802771068097",
  appId: "1:802771068097:web:ce2fb1bbcd69b2c719e040"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);