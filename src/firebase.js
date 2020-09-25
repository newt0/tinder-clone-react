import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQbDB-umjZ6WtukPUkjsBz2c47Rq0siDY",
  authDomain: "tinder-clone-react-a4189.firebaseapp.com",
  databaseURL: "https://tinder-clone-react-a4189.firebaseio.com",
  projectId: "tinder-clone-react-a4189",
  storageBucket: "tinder-clone-react-a4189.appspot.com",
  messagingSenderId: "803142668343",
  appId: "1:803142668343:web:d95b5c5501f65673626fb2",
  measurementId: "G-RZ2R0PP5YF",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
