
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyACWVSpFtHDLFu6Hc18QiM3v7LCEWcYDuk",
  authDomain: "demoweb-d85d4.firebaseapp.com",
  projectId: "demoweb-d85d4",
  storageBucket: "demoweb-d85d4.firebasestorage.app",
  messagingSenderId: "839527732568",
  appId: "1:839527732568:web:5b414dcbdc77048f7f812d"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const storage = getStorage(app);


// Exporting Firebase services to use in other parts of the app
export { app, db, storage, };
