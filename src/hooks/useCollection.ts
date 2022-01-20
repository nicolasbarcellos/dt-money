import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  orderBy,
} from "@firebase/firestore";
import { useAuth } from "./useAuth";

interface DocumentsValue {
  categoria: string;
  titulo: string;
  type: string;
  uid: string;
  valor: number;
  createdAt: any;
  id: string;
}

export const useCollection = (collectionPath: string) => {
  const [documents, setDocuments] = useState<DocumentsValue[]>([]);
  const [error, setError] = useState(null);
  const { user } = useAuth();



  useEffect(() => {
    const ref = collection(db, collectionPath);

    const q = query(
      ref,
      where("uid", "==", user.uid),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        const results = [] as any;
        querySnapshot.forEach((doc) => {
          results.push({...doc.data(), id: doc.id});
        });

        setDocuments(results);
        setError(null);
      },
      (error: any) => {
        setError(error.message);
      }
    );

    return () => unsubscribe();
  }, [collectionPath, user.uid]);

  return { documents, error };
};
