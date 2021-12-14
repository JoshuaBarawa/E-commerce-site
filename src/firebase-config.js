import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCc2CF4JOE-pneovH-eN4Ils0dh6RJ_qOI",
    authDomain: "e-cart-aea99.firebaseapp.com",
    projectId: "e-cart-aea99",
    storageBucket: "e-cart-aea99.appspot.com",
    messagingSenderId: "96727918508",
    appId: "1:96727918508:web:cc0e3794c30bd6c546fc09"
  };

  const fire = initializeApp(firebaseConfig);
   export const auth = getAuth(fire)
