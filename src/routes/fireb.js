// Importing the Firebase functions needed from SDKs
import { initializeApp } from "firebase/app";

// importing firebase database requirments
import {
  getFirestore,
  collection,
  getDocs,
  doc
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
const colRef = collection(userdatabase,'UsersDetail')

//getting collection data (firebase) by using the firebase function 'GetDocs'
//this is returning all the data in our firebase database
getDocs(colRef)
.then((snapshot)=>
  {
    //user array
    let users =[]
    // running throuhg the DATAbase storing it into the array 
    snapshot.docs.forEach((data) => {
        users.push({...data.data(), id: data.id})
    })
    //displaying the actual DATA from our database in a console log (not on screen)
    console.log(users)
  }
)


export default app;


