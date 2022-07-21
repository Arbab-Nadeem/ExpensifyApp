import { getDatabase, ref } from 'firebase/database';
import { initializeApp } from 'firebase/app';
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	onAuthStateChanged,
} from 'firebase/auth';
// Initialize Firebase

const firebaseConfig = {
	apiKey: process.env.FIRBASE_API_KEY,
	authDomain: process.env.FIRBASE_AUTH_DOMAIN,
	databaseURL: process.env.FIRBASE_DATABASE_URL,
	projectId: process.env.FIRBASE_PROJECT_ID,
	storageBucket: process.env.FIRBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.FIRBASE_MESSAGING_SENDER_ID,
	appId: process.env.FIRBASE_APP_ID,
};
export const app = initializeApp(firebaseConfig);
const database = getDatabase();
const googleAuthProvider = new GoogleAuthProvider();
const dbRef = ref(database, 'expenses');
const auth = getAuth(app);

export { database as default, dbRef, googleAuthProvider, auth };
