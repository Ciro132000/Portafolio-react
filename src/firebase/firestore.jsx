
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase-config';

import { getFirestore, getDoc, getDocs, collection } from "firebase/firestore";

initializeApp(firebaseConfig);

const db = getFirestore(firebaseConfig);

export const getFirestoreDataForComponent1 = async () => {
  const queryCollection = collection(db, "perfil");
  getDocs(queryCollection).then((res) => {
    return res.docs[0].data();
  });
};
