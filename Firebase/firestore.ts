import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBcVePSV_fUKeT-nxQ6hoO0sRNBtGYZhCY",
    authDomain: "belgastechnika-e2a4b.firebaseapp.com",
    projectId: "belgastechnika-e2a4b",
    storageBucket: "belgastechnika-e2a4b.appspot.com",
    messagingSenderId: "259379581500",
    appId: "1:259379581500:web:78e191e6e3b65a55ff2939",
    measurementId: "G-XRJWP5MM2D"
};

initializeApp(firebaseConfig)

const dataBase = getFirestore();

export default dataBase;