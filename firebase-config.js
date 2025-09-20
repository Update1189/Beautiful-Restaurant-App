// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAM6Aw5rI5ysxlJ8osuozlV1OdVy3QqJJ4",
  authDomain: "my-restaurant-app-8c40b.firebaseapp.com",
  projectId: "my-restaurant-app-8c40b",
  storageBucket: "my-restaurant-app-8c40b.firebasestorage.app",
  messagingSenderId: "744991278655",
  appId: "1:744991278655:web:a3c4975525c5f9d57f5a8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const db = getFirestore(app);

 console.log("✅ Firebase connected!");

