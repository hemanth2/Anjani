import { db } from '../fbconfig';

import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  doc,
  query, where
} from 'firebase/firestore';

const bookCollectionRef = collection(db, 'items');
class ItemDataService {
  addItem = (newItem) => {
    return setDoc(doc(db, "items", newItem.No.toString()), newItem);
  };

  updateItem = (id, updatedItem) => {
    const itemDoc = doc(db, 'items', id);
    return updateDoc(itemDoc, updatedItem);
  };

  deleteBook = (id) => {
    const bookDoc = doc(db, 'books', id);
    return deleteDoc(bookDoc);
  };

  getAllItems = () => {
    return getDocs(bookCollectionRef);
  };

  getItem = (id) => {
    const itemDoc = doc(db, 'items', id);
    return getDoc(itemDoc);
  };

  filterItem = (startDate) => {
    console.log(startDate)
    const q = query(bookCollectionRef, where('bookedDate', '>=', startDate));
    return getDocs(q);
  }

}

export default new ItemDataService();
