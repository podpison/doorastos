import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJ3AtdvMPkXOtiIogZc7HUfn8GRS-8iBE",
  authDomain: "doorastos.firebaseapp.com",
  projectId: "doorastos",
  storageBucket: "doorastos.appspot.com",
  messagingSenderId: "826311039169",
  appId: "1:826311039169:web:907e17126de7ae1a3f1c40",
  measurementId: "G-MHSFYHXZ95"
};

const app = initializeApp(firebaseConfig);

const fs = getFirestore(app);

export const itemsAPI = {
  get: async (collectionName: string) => {
    const itemsSnapshot = await getDocs(collection(fs, collectionName));
    return itemsSnapshot.docs.map(d => d.data());
  },
};

export const customersAPI = {
  add: async (data: Object) => {
    const docRef = await addDoc(collection(fs, "contactUs"), data);
    return !!docRef;
  },
};