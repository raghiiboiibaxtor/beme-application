<script>

import {goto} from '$app/navigation';
import { collection, getDocs, doc, setDoc} from "firebase/firestore";


// ** connecting to Firebase database *** \\
//Initialise Services
const _userDatabase = getFirestore(app)

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
     
let _userName = document.getElementById('name').value;
let _userSurname = document.getElementById('surname').value;

// Then writes it to the database by adding colletion ().withConverter (collection) document _ref number will autogenerate

const _ref = doc(collection(_userDatabase, "UsersDetail")).withConverter(_userDetails);
await setDoc(_ref, new Users(_userName, _userSurname));


</script>

 
     
    <form class="container">
        <div class="card">
            <div class="card-body">
                <div class="form-group">
                    <label for="exampleFormControlInput1">
                        Enter Your Name
                    </label>
                     
                    <input type="text" class="form-control"
                    id="name" placeholder="Enter your name">
                </div>
 
                <div class="form-group">
                    <label for="exampleFormControlInput1">
                        Enter your Surname
                    </label>
                     
                    <input type="surname" class="form-control"
                    id="surname" placeholder="surname">
                </div>
            </div>
            <button type="submit" class="btn btn-primary"
                style="margin-left: 15px; margin-top: 10px">
                Submit
            </button>
        </div>
    </form>

