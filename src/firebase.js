import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCVBr7GZnKb-FqF9TKjCs76hg7XvPVwTWA",
  authDomain: "whatsupp-clone-1c2fa.firebaseapp.com",
  databaseURL: "https://whatsupp-clone-1c2fa.firebaseio.com",
  projectId: "whatsupp-clone-1c2fa",
  storageBucket: "whatsupp-clone-1c2fa.appspot.com",
  messagingSenderId: "53804796762",
  appId: "1:53804796762:web:fc7ec409bdbbc6b7d04163",
  measurementId: "G-39PLSRRHQ6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
