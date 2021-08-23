import firebase from "firebase/app";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBCxKwBBOShUMWj6Q-5SvbTZRXo06Z_zwE",
  authDomain: "next-it-faa60.firebaseapp.com",
  projectId: "next-it-faa60",
  storageBucket: "next-it-faa60.appspot.com",
  messagingSenderId: "1045728003220",
  appId: "1:1045728003220:web:68664ff07fda7113756081",
};

export const db = firebase.initializeApp(config).firestore();
