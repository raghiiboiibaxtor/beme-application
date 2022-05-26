// Importing the Firebase functions needed from SDKs

//import { database } from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs, doc, setDoc} from "firebase/firestore";


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
const _userDatabase = getFirestore(app)


// ** connecting to Firebase database *** \\
//Initialise Services


//variable used to pass data to profile.svelte
export let _helloUser


class Users {
  constructor (name, surname) 
  {
      this.name = name;
      this.surname = surname;
  }
}


//  Cloud Firestore converts the objects to supported data types.
const _userDetails = 
{
  toFirestore: (user) => 
  {
      return {
          name: user.name,
          surname: user.surname
          };
  },
  fromFirestore: (snapshot, options) => 
  {
      const data = snapshot.data(options);
      return new Users(data.name, data.surname);
  }
};



// Declaring local variables to grab info from form in UI 
     
//let _userName = document.getElementById('name').value;
//let _userSurname = document.getElementById('surname').value;

// Then writes it to the databaseby adding colletion ().withConverter (collection) document _ref number will autogenerate

const _ref = doc(collection(_userDatabase, "UsersDetail")).withConverter(_userDetails);
await setDoc(_ref, new Users("_userName", "_userSurname"));


export default app;