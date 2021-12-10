import firebase from 'firebase';
import firebaseConfig from './firebaseAPI';

// cheach app is already initialized or not
const app = !firebase.apps.length
	? firebase.initializeApp(firebaseConfig)
	: firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
