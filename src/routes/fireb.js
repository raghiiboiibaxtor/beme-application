// Importing the Firebase functions needed from SDKs and Firestore
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc} from "firebase/firestore";

// Firebase app configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMEBQEH-S1nDhjXSWrm8oOoyyt4QTJnIs",
  authDomain: "beme-64162.firebaseapp.com",
  projectId: "beme-64162",
  storageBucket: "beme-64162.appspot.com",
  messagingSenderId: "48807753942",
  appId: "1:48807753942:web:22094a5f69ba588a2df177"
};

// Initializise Firebase
const app = initializeApp(firebaseConfig);

// ** connecting to Firebase database *** \\
//Initialise Services
export const userdatabase = getFirestore(app)


export default app;