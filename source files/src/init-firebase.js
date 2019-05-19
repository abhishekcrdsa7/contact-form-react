import * as firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyAD5YGPH-s5Cec07jIs0EiuDjSmneIPHBg",
    authDomain: "deevesoft-react.firebaseapp.com",
    databaseURL: "https://deevesoft-react.firebaseio.com",
    projectId: "deevesoft-react",
    storageBucket: "deevesoft-react.appspot.com",
    messagingSenderId: "691265818354",
    appId: "1:691265818354:web:7a1dbfbfd758cc48"
};

firebase.initializeApp(firebaseConfig);
let database = firebase.database();
export default database;
