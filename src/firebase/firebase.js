import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
export const firebaseConfig = {
  apiKey: "AIzaSyANuLPgqNcL-sL-aITGqw854wjUnI59q5g",
  authDomain: "photos-d7c7f.firebaseapp.com",
  projectId: "photos-d7c7f",
  storageBucket: "photos-d7c7f.appspot.com",
  messagingSenderId: "849446698654",
  appId: "1:849446698654:web:c8ceb7f9c134c9852c458f",
  measurementId: "G-DV89R1NFHL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();
setPersistence(auth, browserLocalPersistence);
