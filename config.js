// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCZXc43App24gxAmu3Lp3Lar6hx8H3uXVA",
    authDomain: "c57-homework.firebaseapp.com",
    projectId: "c57-homework",
    storageBucket: "c57-homework.appspot.com",
    messagingSenderId: "606449641375",
    appId: "1:606449641375:web:b1d928f764035988713faa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app