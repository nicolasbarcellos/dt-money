import { useEffect, useReducer, useState } from "react";
import {
  Timestamp,
  addDoc,
  collection,
  deleteDoc,
  doc,
} from "@firebase/firestore";
import { db } from "../firebase";

interface DocumentProps {
  titulo: string;
  valor: number;
  type: string;
  categoria: string;
}

let initialState = {
  document: null,
  error: null,
  success: false,
  isPending: false,
};

const firestoreReducer = (state: any, action: any): any => {
  switch (action.type) {
    case "IS_PENDING":
      return {
        document: null,
        isPending: true,
        error: null,
        success: false,
      };
    case "ADDED_DOCUMENT":
      return {
        document: action.payload,
        isPending: false,
        success: true,
        error: null,
      };
    case "DELETE_DOCUMENT":
      return {
        document: null,
        success: true,
        error: null,
        isPending: false,
      };
    case "ERROR":
      return {
        document: null,
        isPending: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const useFirestore = (collectionPath: string) => {
  const [state, dispatch] = useReducer(firestoreReducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);
  const ref = collection(db, collectionPath);

  const addDocument = async (doc: DocumentProps) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createdAt = Timestamp.fromDate(new Date());
      const addedDocument = await addDoc(ref, { ...doc, createdAt });

      if (!isCancelled) {
        dispatch({ type: "ADDED_DOCUMENT", payload: addedDocument });
      }
    } catch (error: any) {
      if (!isCancelled) {
        dispatch({ type: "ERROR", payload: error.message });
      }
    }
  };

  const deleteDocument = async (id: any) => {
    dispatch({ type: "IS_PENDING" });

    try {
      await deleteDoc(doc(db, "transactions", id));

      if (!isCancelled) {
        dispatch({ type: "DELETE" });
      }
    } catch (error: any) {
      if (!isCancelled) {
        dispatch({ type: "ERROR", payload: "could not delete" });
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { ...state, addDocument, deleteDocument };
};
