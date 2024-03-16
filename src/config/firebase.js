import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore, deleteDoc, doc, updateDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAPOrwM9buo1tSN2APvNRpFiyhZ3t0K3_k",
  authDomain: "contact-app1-ef43c.firebaseapp.com",
  projectId: "contact-app1-ef43c",
  storageBucket: "contact-app1-ef43c.appspot.com",
  messagingSenderId: "538487880733",
  appId: "1:538487880733:web:3ce9ea698030308fc0daf4",
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