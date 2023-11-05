// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAptWu4_SCzF54JvoBuammpgclPW5LVDok",
  authDomain: "food-sharing-b4e8a.firebaseapp.com",
  projectId: "food-sharing-b4e8a",
  storageBucket: "food-sharing-b4e8a.appspot.com",
  messagingSenderId: "649153005477",
  appId: "1:649153005477:web:f0035641d65dba14190a4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;