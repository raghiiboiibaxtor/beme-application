<script>
    // Importing SDKs
    import App from "./fireb.js";
    import {onMount} from 'svelte';
    import { getAuth, onAuthStateChanged } from 'firebase/auth';
    import { goto } from '$app/navigation';
    import NavBar from '../components/layout/navbar.svelte';
    import {isLoggedIn} from './stores/authstore';
    import Header from '../components/layout/header.svelte';
    
    // Mounting authentication. 
    // Grabbing getAuth() variable from Firebase and passing it locally to auth
    onMount(() => {
        const auth = getAuth();
        // Monitors authentication state changes.  
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // If user verified open application
                console.log('Welcome to the BeMe!');
                isLoggedIn.update(() => true) // If the user exists authstore writeable will return true.
            }
            else {
                // Else redirect to login page
                isLoggedIn.update(() => false) // Ensuring authstore writable is false and user cannot login
                goto('/login'); // Navigating back to login page
            }
        })
    })
    </script>

    <NavBar/>
    <Header/>
    
    <slot/>