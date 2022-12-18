//firebase 버전별로 임포트 명령어가 다르다.(v9이상)
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//v8이하는
// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/firestore';

// firebase 불러오는 코드

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyD0uv2R9iDJt1sD29M_d7Jb4RiZVd0rHk8",

  authDomain: "clone-d2b94.firebaseapp.com",

  projectId: "clone-d2b94",

  storageBucket: "clone-d2b94.appspot.com",

  messagingSenderId: "244887699921",

  appId: "1:244887699921:web:f5359ec5c43786032e20f0",

  measurementId: "G-W1Y0S704ZZ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
