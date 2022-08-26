import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBTMwnOQpjmvkeqpXGhUcAU5Preqh6DK70",
    authDomain: "loginreactnative-3c854.firebaseapp.com",
    projectId: "loginreactnative-3c854",
    storageBucket: "loginreactnative-3c854.appspot.com",
    messagingSenderId: "637337905470",
    appId: "1:637337905470:web:04dcf1694b95714968a46f",
    measurementId: "G-RNWT1J3DMY"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase }