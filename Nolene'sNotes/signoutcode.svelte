
<script>
import {goto} from '$app/navigation';
import {getAuth, signOut} fom 'firebase/auth';
import { isLoggedIn } from "../../../authStore";

const auth = getAuth()
function logout(){
    signOut(auth)
    .then(() =>{
        localStorage.removeItem('uid');
        goto('/login');
    })
}

</script>


<ul class="nav justify-content-end bg-dark">
  <li class="nav-item">
    <a class="nav-link" aria-current="page" href="/">Home</a>
    </li>
  
  <li class="nav-item">
    <a class="nav-link" target="_blank" href="https://google.com">Google</a
    >
  </li>

{#if $isLoggedIn}
    <li class="nav-item">
      <a
        class="nav-link"
        on:click|preventDefault={logout}
        target="_blank"
        href="/">Sign Out</a
      >
    </li>
  {/if}

</ul>