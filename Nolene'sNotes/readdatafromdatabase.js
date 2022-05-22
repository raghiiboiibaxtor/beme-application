import { collection, getDocs } from "firebase/firestore"; 
import { userdatabase } from "../src/routes/fireb";

const querySnapshot = await getDocs(collection(userdatabase, "users"));
querySnapshot.forEach((doc) => {
  console.log(`${doc.id} => ${doc.data()}`);
});