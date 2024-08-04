import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";
import {
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { firestore, auth } from "@/firebase";

const PantryContext = createContext();

export const usePantry = () => useContext(PantryContext);

export const PantryProvider = ({ children }) => {
  const [pantryItems, setPantryItems] = useState([]);
  const [userEmail, setUserEmail] = useState("");
  const [userUid, setUserUid] = useState("");

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserEmail(user.email);
        setUserUid(user.uid);
      }
    });

    return () => unsubscribe();
  }, []);

  const updatePantry = useCallback(async () => {
    if (userUid) {
      const userPantryRef = collection(
        firestore,
        "pantry-items",
        userUid,
        "items"
      );
      const querySnapshot = await getDocs(userPantryRef);
      const pantryList = [];
      querySnapshot.forEach((doc) => {
        pantryList.push({ id: doc.id, ...doc.data() });
      });
      setPantryItems(pantryList);
    }
  }, [userUid]);

  useEffect(() => {
    if (userUid) {
      updatePantry();
    }
  }, [userUid, updatePantry]);

  const addItem = async (name, quantity, expiration) => {
    if (userUid) {
      const userPantryRef = collection(
        firestore,
        "pantry-items",
        userUid,
        "items"
      );
      const itemRef = doc(userPantryRef, name);
      const docSnap = await getDoc(itemRef);
      if (docSnap.exists()) {
        const { quantity: existQuantity } = docSnap.data();
        await setDoc(
          itemRef,
          { quantity: existQuantity + Number(quantity), expiration },
          { merge: true }
        );
      } else {
        await setDoc(itemRef, {
          name,
          quantity: Number(quantity) || 1,
          expiration,
        });
      }
      await updatePantry();
    }
  };

  const editItem = async (id, name, quantity, expiration) => {
    if (userUid) {
      const userPantryRef = collection(
        firestore,
        "pantry-items",
        userUid,
        "items"
      );
      const itemRef = doc(userPantryRef, id);
      await setDoc(
        itemRef,
        { name, quantity: Number(quantity) || 1, expiration },
        { merge: true }
      );
      await updatePantry();
    }
  };

  const deleteItem = async (id) => {
    if (userUid) {
      const userPantryRef = collection(
        firestore,
        "pantry-items",
        userUid,
        "items"
      );
      const itemRef = doc(userPantryRef, id);
      await deleteDoc(itemRef);
      await updatePantry();
    }
  };

  return (
    <PantryContext.Provider
      value={{
        pantryItems,
        addItem,
        editItem,
        deleteItem,
        userEmail,
        userUid,
      }}
    >
      {children}
    </PantryContext.Provider>
  );
};
