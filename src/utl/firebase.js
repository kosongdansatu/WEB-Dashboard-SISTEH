// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD89taaRpiWTH8P3ErggyJc4_XO84DU5Hs",
    authDomain: "plti-3de2b.firebaseapp.com",
    databaseURL: "https://plti-3de2b-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "plti-3de2b",
    storageBucket: "plti-3de2b.appspot.com",
    messagingSenderId: "83991310473",
    appId: "1:83991310473:web:95d265eff70e4892625658",
    measurementId: "G-0FLKXR68FQ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
export const productCollection = db.ref("DATA_AI"); //firebaseLocation

export default firebase;