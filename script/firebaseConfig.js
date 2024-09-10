
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";




const firebaseConfig = {
    apiKey: "AIzaSyDQUeC9eKEs9-Y9n7Ro5B7i60tP2IoKet0",
    authDomain: "fir-authentication-eb0f3.firebaseapp.com",
    projectId: "fir-authentication-eb0f3",
    storageBucket: "fir-authentication-eb0f3.appspot.com",
    messagingSenderId: "961181406149",
    appId: "1:961181406149:web:81361cd8209047fb3db1ac",
    measurementId: "G-J0MFE6G81V"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);