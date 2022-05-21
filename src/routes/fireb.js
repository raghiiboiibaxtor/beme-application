// Importing the Firebase functions needed from SDKs
import { initializeApp } from "firebase/app";

// importing firebase database requirments
import {
  getFirestore,
  collection,
  getDoc
}from 'firebase/firestore'



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

//Initialise Services

const userdatabase = getFirestore()


//collection ref 
// importing the function collection from the firebase libarary and then pass the database in firestore as an argument and reference to the collection in firebase
const colRef = collection(userdatabase,UserDetails)

//getting collection data (firebase) by using the firebase function 'GetDocs'
//this is returning all the data in our firebase database
getDoc(colRef)
.then((snapshot)=>
{
  console.log(snapshot.docs)
}
)


export default app;


