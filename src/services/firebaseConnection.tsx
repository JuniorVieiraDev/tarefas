import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDZMhaI7u9S3cWdvk27AY6hpg9dc2e5mko",
    authDomain: "tarefas-2d822.firebaseapp.com",
    projectId: "tarefas-2d822",
    storageBucket: "tarefas-2d822.firebasestorage.app",
    messagingSenderId: "774201703124",
    appId: "1:774201703124:web:dbf8f0ec37a0b1196c9941"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp)

export { db }
