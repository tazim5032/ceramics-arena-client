import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDcp98u4Lo-M7febEEc0bIzb1NoAx1m-iI",
  authDomain: "ceramics-arena-client.firebaseapp.com",
  projectId: "ceramics-arena-client",
  storageBucket: "ceramics-arena-client.appspot.com",
  messagingSenderId: "867229452576",
  appId: "1:867229452576:web:0673960dd359b1b6bbef45"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;