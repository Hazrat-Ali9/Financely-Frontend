import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlkdDjMCOvPBWDK3bb_-dvnvEiLg_GaRI",
  authDomain: "financely-eeccc.firebaseapp.com",
  projectId: "financely-eeccc",
  storageBucket: "financely-eeccc.appspot.com",
  messagingSenderId: "444237250036",
  appId: "1:444237250036:web:62b8c763a7fe8a6b48cda1",
  measurementId: "G-0WWR89TGCJ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
