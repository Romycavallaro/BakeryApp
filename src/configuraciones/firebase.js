import { initializeApp } from "firebase/app";
import  {getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAvWPRZ9EM7MYHjWPACVLEvsZjAhmtiUcs",
  authDomain: "appbakerycoder.firebaseapp.com",
  projectId: "appbakerycoder",
  storageBucket: "appbakerycoder.appspot.com",
  messagingSenderId: "165320322911",
  appId: "1:165320322911:web:ad537b96b4513de3a090ea",
  measurementId: "G-PZDRWP80HF"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);