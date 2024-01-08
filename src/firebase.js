// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCWMD12X0Jc6NgmyZdWashNFrUvBwPxi5k",
  authDomain: "drive-661fe.firebaseapp.com",
  projectId: "drive-661fe",
  storageBucket: "drive-661fe.appspot.com",
  messagingSenderId: "847396486397",
  appId: "1:847396486397:web:462c5185212a67298ad294",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
