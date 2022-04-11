import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBvJz0hpPnx11EhcBkO5UnAy4BXYISwOaU",
  authDomain: "genius-car-service-tailwind.firebaseapp.com",
  projectId: "genius-car-service-tailwind",
  storageBucket: "genius-car-service-tailwind.appspot.com",
  messagingSenderId: "792571237230",
  appId: "1:792571237230:web:dbda1dbf0ae1c3321fe77f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth