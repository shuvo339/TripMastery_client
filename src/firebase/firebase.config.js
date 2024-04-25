import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPCjs5dDnEedKrcc1odhni9VF3kxfbEoM",
  authDomain: "tripmastery-auth.firebaseapp.com",
  projectId: "tripmastery-auth",
  storageBucket: "tripmastery-auth.appspot.com",
  messagingSenderId: "689190575516",
  appId: "1:689190575516:web:898af1a602b99ef7ebbc59"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;