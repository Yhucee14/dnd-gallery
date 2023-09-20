import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseKey = import.meta.env.VITE_FIREBASE_KEY;

const firebaseConfig = {
  apiKey: firebaseKey,
  authDomain: "dnd-gallery-9bae7.firebaseapp.com",
  projectId: "dnd-gallery-9bae7",
  storageBucket: "dnd-gallery-9bae7.appspot.com",
  messagingSenderId: "584869846947",
  appId: "1:584869846947:web:0d0bafcc09c1e4a2c28416"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);