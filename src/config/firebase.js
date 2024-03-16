import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, deleteDoc, doc, updateDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "contact-app1-ef43c.firebaseapp.com",
  projectId: "contact-app1-ef43c",
  storageBucket: "contact-app1-ef43c.appspot.com",
  messagingSenderId: import.meta.VITE_SENDER_ID,
  appId: import.meta.VITE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getData = async () => {
    const colRef = collection(db, "contacts");
    const snapshot = await getDocs(colRef);
    return snapshot.docs;
}

export const addContact = async (contactData) => {
    const docRef = await addDoc(collection(db, "contacts"), contactData);
    return docRef.id; 
}

export const deleteContact = async (contactId) => {
    await deleteDoc(doc(db, "contacts", contactId));
}

export const updateContact = async (contactId, updatedData) => {
        await updateDoc(doc(db, "contacts", contactId), updatedData);
}