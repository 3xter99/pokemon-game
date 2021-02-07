
import firebase from "firebase/app";
import "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyA3ipILysQfA5J1QTf5Gbay-F2kF6zGxnk",
    authDomain: "pokemon-game-ec026.firebaseapp.com",
    databaseURL: "https://pokemon-game-ec026-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-ec026",
    storageBucket: "pokemon-game-ec026.appspot.com",
    messagingSenderId: "359275148538",
    appId: "1:359275148538:web:078718e0824ca3c12a8543"
};

firebase.initializeApp(firebaseConfig)
export const fire = firebase
export const database = fire.database()

export default database
