import { writable } from "svelte/store";

// Setting up writeable store value
export const isLoggedIn = writable(false); // Default is false so users are not automatically logged in.