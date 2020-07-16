import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD9MBTyqFkDqyUizg_Zzw1XQrN0Q0eJSa8",
    authDomain: "react-shopping-cart-d5193.firebaseapp.com",
    databaseURL: "https://react-shopping-cart-d5193.firebaseio.com",
    projectId: "react-shopping-cart-d5193",
    storageBucket: "react-shopping-cart-d5193.appspot.com",
    messagingSenderId: "869759873475",
    appId: "1:869759873475:web:5ba0d132d13dac78178d76",
    measurementId: "G-9PJX0NJXHR"
};

firebase.initializeApp(firebaseConfig);

export default firebase;