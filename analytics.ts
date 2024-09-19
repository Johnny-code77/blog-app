// analytics.ts
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyAr4xiAqNd7rA8Qn-YW-bsEXjg_1OJn1HM",
  authDomain: "contacts-592d7.firebaseapp.com",
  projectId: "contacts-592d7",
  storageBucket: "contacts-592d7.appspot.com",
  messagingSenderId: "780433329415",
  appId: "1:780433329415:web:3d6175101b4ae33656c9a2",
  measurementId: "G-93F60QZV8T"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { analytics };