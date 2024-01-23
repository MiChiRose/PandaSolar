import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBvQLZU1kS7V7HdsWssgpVCxq78TUDqHDU",
    authDomain: "pandasolar-4036f.firebaseapp.com",
    projectId: "pandasolar-4036f",
    storageBucket: "pandasolar-4036f.appspot.com",
    messagingSenderId: "313158142159",
    appId: "1:313158142159:web:1cfc6c466be7158ba14fba",
    measurementId: "G-PRFX90H53N"
};

initializeApp(firebaseConfig)

const dataBase = getFirestore();

export default dataBase;