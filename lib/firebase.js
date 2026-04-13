import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// ── Firebase Configuration ──────────────────────────────────────────────────────
// Replace with your Firebase project config
// Get this from Firebase Console: Project Settings > Your apps
const firebaseConfig = {
    apiKey: "AIzaSyCVv91-tOlYFjeSnnxPwy0DvHCTrx6RLRA",
    authDomain: "task-d72fd.firebaseapp.com",
    projectId: "task-d72fd",
    storageBucket: "task-d72fd.firebasestorage.app",
    messagingSenderId: "519968108936",
    appId: "1:519968108936:web:41b31ec769b12434b6ca3d",
    measurementId: "G-6M6X2H6QWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);

export default app;
