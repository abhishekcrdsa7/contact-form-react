import * as firebase from 'firebase/app';
import 'firebase/database';
//firebase config object
firebase.initializeApp(firebaseConfig);
let database = firebase.database();
export default database;
