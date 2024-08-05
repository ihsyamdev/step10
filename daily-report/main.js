// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { fetchHistoryData } from "./my-modules/fetch-history-data.js";
import { submitDada } from "./my-modules/submit-data.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// CloudFirestoreの初期化
const db = getFirestore(app);

// CloudFirestoreにデータを追加
if(document.getElementById("js-form")) {
  document.getElementById("js-form").addEventListener("submit", (e) => submitDada(e, addDoc, collection, db));
}

// CloudFirestoreからデータを取得して表示
if(document.getElementById("js-history")) {
  fetchHistoryData(getDocs, collection, db);
}
