import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useAuth } from "./useAuth";
import { signOut } from "@firebase/auth";

export const useLogout = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuth();

  const logout = async () => {
    setIsPending(true);
    setError(null);

    try {
      await signOut(auth);

      dispatch({ type: "LOGOUT" });

      if (!isCancelled) {
        setError(null);
        setIsPending(false);
      }
    } catch (error: any) {
      if (!isCancelled) {
        setError(error.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { error, logout, isPending };
};
