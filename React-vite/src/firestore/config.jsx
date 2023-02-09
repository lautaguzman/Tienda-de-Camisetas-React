import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyC3U4NeO1QXf1mY3Xk-Y_bGDnoMnnTFNnY",
  authDomain: "proyecto-ecommerce-mq-2022.firebaseapp.com",
  projectId: "proyecto-ecommerce-mq-2022",
  storageBucket: "proyecto-ecommerce-mq-2022.appspot.com",
  messagingSenderId: "372762969663",
  appId: "1:372762969663:web:43a633c6eee765c9c59a8a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const initFirestoreApp = () => {
  return app;
};
