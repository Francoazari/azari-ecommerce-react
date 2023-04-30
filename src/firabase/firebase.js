import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKVyXAF99Xi-neXQ4idUWO88IKQ2zlhHc",
    authDomain: "az-ecommerce-60349.firebaseapp.com",
    projectId: "az-ecommerce-60349",
    storageBucket: "az-ecommerce-60349.appspot.com",
    messagingSenderId: "706037083199",
    appId: "1:706037083199:web:ea1fa6c09632c27ccf5c8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
