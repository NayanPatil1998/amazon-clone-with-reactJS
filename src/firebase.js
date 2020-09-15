import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBi2nuzKpXE8OeXK7Bcpydsc4PCufGrShM",
  authDomain: "clone-e82b9.firebaseapp.com",
  databaseURL: "https://clone-e82b9.firebaseio.com",
  projectId: "clone-e82b9",
  storageBucket: "clone-e82b9.appspot.com",
  messagingSenderId: "307870759470",
  appId: "1:307870759470:web:81ec2a0862b8f4081bbdbf",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);

const db = firebaseapp.firestore()
const auth = firebaseapp.auth();
export { db, auth };
