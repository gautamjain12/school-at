import firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyCYlaSNRmsdhxvWkDCzO-iPPZADjN4pzJc",
    authDomain: "student-attendance-app-66c6e.firebaseapp.com",
    databaseURL: "https://student-attendance-app-66c6e.firebaseio.com",
    projectId: "student-attendance-app-66c6e",
    storageBucket: "student-attendance-app-66c6e.appspot.com",
    messagingSenderId: "524330739692",
    appId: "1:524330739692:web:2b0930692d34cd4ac682c9",
    measurementId: "G-YHXMCRFQVV"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default  firebase.database()