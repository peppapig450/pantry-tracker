import { firebase } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from "./config/firebaseConfig";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
