<script>

    // Importing SDKs
    
    
    import App from "./fireb.js";
    import {onMount} from 'svelte';
    import { getAuth, onAuthStateChanged } from 'firebase/auth';
    import { goto } from '$app/navigation';
    
    // Mounting authentication. 
    // Grabbing getAuth() variable from Firebase and passing it locally to auth
    onMount(() => {
        const auth = getAuth();
        // Monitors authentication state changes.  
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // If user verified open application
                console.log('Welcome to the BeMe!');
            }
            else {
                // Else redirect to login page
                goto('/login');
            }
        })
    })
    </script>
    
 
    <slot/>