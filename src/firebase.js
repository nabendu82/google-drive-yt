import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCKsq9OU1fY09h99lzxYXVUccqLtuDth5M",
    authDomain: "drive-yt-twd.firebaseapp.com",
    projectId: "drive-yt-twd",
    storageBucket: "drive-yt-twd.appspot.com",
    messagingSenderId: "741425428803",
    appId: "1:741425428803:web:9a02b4a63cc62ea6da17f6"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const storage = firebase.storage();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, storage, auth, provider }