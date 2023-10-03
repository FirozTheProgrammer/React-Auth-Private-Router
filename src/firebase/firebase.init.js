// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCr0lfKpvCsqQ0fwhz6Rs_d9NtJItQBSnE",
  authDomain: "private-route-b6f13.firebaseapp.com",
  projectId: "private-route-b6f13",
  storageBucket: "private-route-b6f13.appspot.com",
  messagingSenderId: "383436977711",
  appId: "1:383436977711:web:f26abaeebc21760b7ef8da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
