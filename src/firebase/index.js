import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "***REMOVED***",
  authDomain: "react-2023-c78aa.firebaseapp.com",
  projectId: "react-2023-c78aa",
  storageBucket: "react-2023-c78aa.appspot.com",
  messagingSenderId: "1061627383765",
  appId: "1:1061627383765:web:964948f36d82fc68afb75c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };