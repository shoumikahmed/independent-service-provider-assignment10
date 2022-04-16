// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBeWOPqyEX8yzpFRkTP9qbpal0_y-mnIY8",
    authDomain: "sa-photography-assignment10.firebaseapp.com",
    projectId: "sa-photography-assignment10",
    storageBucket: "sa-photography-assignment10.appspot.com",
    messagingSenderId: "534350791788",
    appId: "1:534350791788:web:8cb203f28662cefb244449"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;