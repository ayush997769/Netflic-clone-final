import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZs8xd1j3NBC8XhwZQT0YsJxaeVQbvJJ0",
  authDomain: "react-netflix-clone-f8016.firebaseapp.com",
  projectId: "react-netflix-clone-f8016",
  storageBucket: "react-netflix-clone-f8016.appspot.com",
  messagingSenderId: "722440541551",
  appId: "1:722440541551:web:62da9437e29ea2c82e449a",
  measurementId: "G-161PJ1H72C"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
