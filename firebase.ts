// firebase.ts
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr4xiAqNd7rA8Qn-YW-bsEXjg_1OJn1HM",
  authDomain: "contacts-592d7.firebaseapp.com",
  projectId: "contacts-592d7",
  storageBucket: "contacts-592d7.appspot.com",
  messagingSenderId: "780433329415",
  appId: "1:780433329415:web:3d6175101b4ae33656c9a2",
  measurementId: "G-93F60QZV8T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics only if the window object is defined
let analytics: any;

if (typeof window !== 'undefined') {
  import('firebase/analytics').then(module => {
    analytics = module.getAnalytics(app);
  }).catch((error) => {
    console.error('Error initializing Analytics:', error);
  });
}

export { analytics };
