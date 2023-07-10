import { initializeApp } from "firebase/app";
import { DocumentData, addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FB_API_KEY,
  authDomain: process.env.FB_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FB_PROJECT_ID, //to use customersAPI this variable have to be exposed in the browser
  storageBucket: process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_MESSAGING_SENDER_ID,
  appId: process.env.FB_APP_ID,
  measurementId: process.env.FB_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const fs = getFirestore(app);

export const itemsAPI = {
  get: async <T = DocumentData>(collectionName: string): Promise<T[]> => { //get all
    let itemsSnapshot = await getDocs(collection(fs, collectionName));

    return itemsSnapshot.docs.map(d => d.data()) as T[];
  },
  getByParam: async <T = DocumentData>(collectionName: string, id: string | undefined): Promise<T | undefined> => {
    if (!id) return;

    let q = query(
      collection(fs, collectionName),
      where('id', '==', Number(id))
    );

    let itemsSnapshot = await getDocs(q);

    return itemsSnapshot.docs.map(d => d.data())[0] as T;
  }
};

export const customersAPI = {
  add: async (data: Object) => {
    let docRef = await addDoc(collection(fs, "contactUs"), data);
    return !!docRef;
  },
};