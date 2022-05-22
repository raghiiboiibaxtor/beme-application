
import {goto} from '$app/navigation';
import {userdatabase} from './fireb.js

import {
  collection,
  getDocs,
  addDoc
}from 'firebase/firestore';


/* 'collecting' from firestore UsersDetails database and then passing the data into the variable collect_Users_Details*/
const collect_Users_Details = collection(userdatabase,'UsersDetail')

/* getting collection data (firebase) by using the firebase function 'GetDocs'
  this is returning all the data in our firebase database (think Loop)*/
  
getDocs(collect_Users_Details)
.then((snapshot)=>
  {
  /* users array*/
      let users =[]

       /*  running through the DATAbase storing it into the array*/
      snapshot.docs.forEach((data) => {
          users.push({...data.data(), id: data.id})
      })

       /* displaying the actual DATA from our database in a console log (not on screen)*/
      console.log(users)
  })

/* NewUserProfile is linked to the form 'addbasic' below*/
  const addprofile = document.querySelector('.addbasic')
      addprofile.addEventListener('Submit',(e)=> {
      e.preventDefault()

/* using the form addbasic, taking the user input and save the data into UsersDetail collection in firestore database*/
  addDoc(collect_Users_Details,
  {
      Name: addprofile.name.value,
      Surname: addprofile.surname.value,
  })
      .then(() => goto("/"))

  
  
  /*pushing data manually to database , keeping the code here as a template/reference 
      try {
      const docRef = await addDoc(collection(userdatabase, "UsersDetail"), {
          Named: "Alan",
          Surname: "Mathison",
          Current: "Student"
  });*/


})


