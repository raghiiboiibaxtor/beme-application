<script>

    import {userdatabase} from "./fireb.js";
    import { collection, addDoc } from "firebase/firestore";

    let users = []

     try {
    const docRef = await addDoc(collection(userdatabase, "UsersDetail"), {
    first: "Ada",
    last: "Lovelace",
    born: 1815
    });
    console.log("Document written with ID: ", docRef.id);
    } catch (e) {
    console.error("Error adding document: ", e);
}   

</script>



<!-- ############################### -->

    <div id="users">


        {#each users as user}
            <div>users</div>
        {/each}

    </div>


<!-- ############################### -->



<style>




</style>