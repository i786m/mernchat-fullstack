import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyByCUFK51NKlAb4PEKtXHPckkXjOsCikbw',
  authDomain: 'mernchat-786.firebaseapp.com',
  projectId: 'mernchat-786',
  storageBucket: 'mernchat-786.appspot.com',
  messagingSenderId: '334675328273',
  appId: '1:334675328273:web:6fdcdc7402db5d3417e0b0',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
