import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCBdBO2k0QRZ-NB84PSbB-QJNXGBETBEYw",
    authDomain: "lessonflow-ae46d.firebaseapp.com",
    projectId: "lessonflow-ae46d",
    storageBucket: "lessonflow-ae46d.firebasestorage.app",
    messagingSenderId: "1053439526149",
    appId: "1:1053439526149:web:713a3e885bd9e46eb4a36c"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export { auth, db, firebaseConfig };
