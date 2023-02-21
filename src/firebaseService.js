import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { getStorage } from "firebase/storage";
// import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBk2_1sAokmGRDAjjamdVmmqtUgDTA5jPA",
  authDomain: "disneyplus-clone-cf56c.firebaseapp.com",
  projectId: "disneyplus-clone-cf56c",
  storageBucket: "disneyplus-clone-cf56c.appspot.com",
  messagingSenderId: "821290931831",
  appId: "1:821290931831:web:415b1d43c05070cbec5872",
  measurementId: "G-PSH7PFJQGD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();
const storage = getStorage(firebaseApp);

export { auth, provider, storage };
export default db;