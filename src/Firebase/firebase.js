// Import the functions you need from the SDKs you need
// import initializeApp  from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import firebase from 'firebase/app'
import'firebase/firestore'
import 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp ( {
  apiKey: "AIzaSyCEOonwRE6Np0o334VWy8rV8jw2ZfosLbc",
  authDomain: "personal-4d34d.firebaseapp.com",
  projectId: "personal-4d34d",
  storageBucket: "personal-4d34d.appspot.com",
  messagingSenderId: "348959116328",
  appId: "1:348959116328:web:15fb107ed7231a1cb7391d",
  measurementId: "${config.measurementId}"
});

// Initialize Firebase
// const analytics = getAnalytics(app);
export const storage = firebase.storage();
  //export{storage, firebase as default };
export default firebase;