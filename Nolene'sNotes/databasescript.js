
<scritp>
// this form is creating / writing and updating firestore

// referencing to database in fireb.js
  import {userdatabase} from fireb.js


// importing firebase function
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc
  }from 'firebase/firestore'


  // initiate variables for form
  let name = ''
  let surname = ''

// add data to database

try {
  const addata = await addDoc(collection(userdatabase, "users"), {
    first: "Ada",
    last: "Lovelace"
  });
  console.log("Document written with ID: ", addata.id);
} catch (e) {
  console.error("Error adding document: ", e);
}



// 'collecting' from firestore UsersDetails and then passing the data into the variable userdatabase
const collect_Users_Details = collection(userdatabase,'UsersDetail')

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

</scritp>


<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="firstname">First Name</label>
      <input type="firstname" class="form-control" id="fname" placeholder="First Name">
    </div>
    <div class="form-group col-md-6">
      <label for="lastname">Last Name</label>
      <input type="lastname" class="form-control" id="lname" placeholder="Last Name">
    </div>
  </div>
  
  <button type="submit" class="btn btn-primary">Save Data</button>
</form>


