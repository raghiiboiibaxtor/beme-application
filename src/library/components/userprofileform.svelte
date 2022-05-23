  
   
<script>
   // importing firebase database requirments
import {
    getFirestore,
    collection,
    getDocs,
    addDoc
  }from 'firebase/firestore'


// ** connecting to Firebase database *** \\
//Initialise Services
const userdatabase = getFirestore()

// 'collecting' from firestore UsersDetails and then passing the data into the variable userdatabase
const collect_Users_Details = collection(userdatabase,'UsersDetail')
                                                                                // const collect_Skills = collection(userdatabase,'UserKills')
                                                                                // const collect_Experience = collection(userdatabase,'UserExperience')
                                                                                // const colllect_Portfolio = collection(userdatabase,'UserPortfolio')

//getting collection data (firebase) by using the firebase function 'GetDocs'
//this is returning all the data in our firebase database (think Loop) 
getDocs(collect_Users_Details)
.then((snapshot)=>
  {
    //users array
    let users =[]
    // running through the DATAbase storing it into the array 
    snapshot.docs.forEach((data) => {
        users.push({...data.data(), id: data.id})
    })
    //displaying the actual DATA from our database in a console log (not on screen)
    console.log(users)
  })



</script>



<h1>Welcome to BeMe</h1>

  <h2>Enter the basics to get started</h2>



