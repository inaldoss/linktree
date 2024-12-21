
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAJSVQHDFfv9PLoJGfUVgngFwk2R-qQJto",
  authDomain: "reactlinks-e3244.firebaseapp.com",
  projectId: "reactlinks-e3244",
  storageBucket: "reactlinks-e3244.firebasestorage.app",
  messagingSenderId: "627217268643",
  appId: "1:627217268643:web:91aed05e26ec42ecaaa416"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

export { auth, db };