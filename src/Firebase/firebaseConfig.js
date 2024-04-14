// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


console.log(import.meta.env.VITE_APIKEY)

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "hoas-residential.firebaseapp.com",
  projectId: "hoas-residential",
  storageBucket: "hoas-residential.appspot.com",
  messagingSenderId: "168558825128",
  appId: "1:168558825128:web:cfd5dcd9bef7c9f892fc9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 export const auth = getAuth(app)
