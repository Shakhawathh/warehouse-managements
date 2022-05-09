// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBupXDQVFml6m89h4u_Bq4-rqy2VDWf-2Y",
  authDomain: "warehouse-7020b.firebaseapp.com",
  projectId: "warehouse-7020b",
  storageBucket: "warehouse-7020b.appspot.com",
  messagingSenderId: "469736204598",
  appId: "1:469736204598:web:c558253e1293812cd66b97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth(app);

export default auth;