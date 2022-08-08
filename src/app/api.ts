import {initializeApp} from "firebase/app";
import {getDatabase, ref} from "firebase/database";

export type ProductType = {
  id: number
  name: string
  price: number
  imageUrl: string
  description: string
};

const firebaseConfig = {
  apiKey: "AIzaSyC6U139VmNiqxL5PmIYgGmm9-CBYaBPvAI",
  authDomain: "shop-test-task-db.firebaseapp.com",
  projectId: "shop-test-task-db",
  storageBucket: "shop-test-task-db.appspot.com",
  messagingSenderId: "510184650469",
  appId: "1:510184650469:web:c1352b5fe2f4fe731dc60c",
  databaseURL: "https://shop-test-task-db-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Realtime Database and get a reference to the service
const db = getDatabase(app);
export const productsRef = ref(db, "products");
