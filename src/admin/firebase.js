import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDDtpOtQ_zXQ74vE4bXZQ14iiJwC9NriQ4",
  authDomain: "meditat-8a532.firebaseapp.com",
  projectId: "meditat-8a532",
  storageBucket: "meditat-8a532.firebasestorage.app",
  messagingSenderId: "250839654762",
  appId: "1:250839654762:web:352477b8924bb351e8c513",
  measurementId: "G-QEK6PENCQL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Services
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
