import { useEffect, useState } from "react";
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "./useAuth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const { dispatch } = useAuth();

  const loginWithEmailAndPassword = async (email: string, password: string) => {
    setError(null);
    setIsPending(true);

    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      dispatch({ type: "LOGIN", payload: res.user });

      if (!res) {
        throw new Error("Could not sign in the user.");
      }

      if (!isCancelled) {
        setError(null);
        setIsPending(false);
      }
    } catch (error: any) {
      if (!isCancelled) {
        setIsPending(false);
        setError(error.message);
      }
    }
  };

  const signInWithGoogleAccount = async () => {
    setIsPending(true);
    setError(null);

    try {
      const provider = new GoogleAuthProvider();
      const res = await signInWithPopup(auth, provider);

      dispatch({ type: "LOGIN", payload: res.user });

      if (!res) {
        throw new Error("Could not complete the signup");
      }

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

  return {
    loginWithEmailAndPassword,
    signInWithGoogleAccount,
    error,
    isPending,
  };
};
