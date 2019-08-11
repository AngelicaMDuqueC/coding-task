import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyCY1kX6JwqchezYVe19tEBX8gxnF9rJ68Y',
  authDomain: 'coding-task-fcb2e.firebaseapp.com',
  databaseURL: 'https://coding-task-fcb2e.firebaseio.com',
  projectId: 'coding-task-fcb2e',
  storageBucket: '',
  messagingSenderId: '498497566544',
  appId: '1:498497566544:web:ea6c26724eb79f89'
};

// Initialize Firebase
firebase.initializeApp(config);
firebase.firestore();

export default firebase;
