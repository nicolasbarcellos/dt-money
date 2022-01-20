import { getAuth } from "@firebase/auth";
import { initializeApp, getApps, getApp } from "@firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB_lW9RKiC6HbT-DZyRjSPQKSeEsA9wXHo",
  authDomain: "dt-money-90300.firebaseapp.com",
  projectId: "dt-money-90300",
  storageBucket: "dt-money-90300.appspot.com",
  messagingSenderId: "312002245310",
  appId: "1:312002245310:web:64d1b8b5ed59230d6964ef",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export { app, db, auth };
