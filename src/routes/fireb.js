// Importing the Firebase functions needed from SDKs
import { getAuth } from "firebase/auth";
//import { database } from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, setDoc, getDoc } from "firebase/firestore";


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


class Users {
  constructor (name, surname) {
      this.name = name;
      this.surname = surname;
  }
  toString() {
      return 'Hello '+ this.name + ', ' + this.surname;
  }
}

const alltheusers = firebase.firestore().collection('UsersDetail');

// Firestore data converter
const userdetails = {
  toFirestore: (user) => {
      return {
          name: user.name,
          surname: user.surname
          };
  },
  fromFirestore: (snapshot, options) => {
      const data = snapshot.data(options);
      return new Users(data.name, data.surname);
  }
};

//by adding colletion ().withConverter (collection) document ref number will autogenerate
const ref = doc(collection(userdatabase, "UsersDetail")).withConverter(userdetails);
await setDoc(ref, new Users("Jam", "Donut"));




/*adding info
try {
    const docRef = await addDoc(collection(userdatabase, "UsersDetail"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);*/
  
  

  //read data
  const querySnapshot = await getDocs(collection(userdatabase, "users"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });

const docRef = doc(collection(userdatabase, "UsersDetail"));
const docSnap = await getDoc(docRef);
if (docSnap.exists()) {
  console.log("Document data:", docSnap.data());
} else {
  // doc.data() will be undefined in this case
  console.log("No such document!");
}
export default app;