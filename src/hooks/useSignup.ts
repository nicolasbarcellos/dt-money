import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "@firebase/auth";
import { auth } from "../firebase";
import { useAuth } from "./useAuth";

interface UseLoginProps {
  isPending: boolean;
  error: null | string;
  signupWithEmailPassword: (
    email: string,
    password: string,
    displayName: string
  ) => void;
  signInWithGoogleAccount: () => void;
}

export const useSignup = (): UseLoginProps => {
  const [isPending, setIsPending] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch } = useAuth();
  

  const signupWithEmailPassword = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setIsPending(true);
    setError(null);

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete the signup");
      }

      await updateProfile(res.user, { displayName });
      dispatch({ type: "LOGIN", payload: res.user });

      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (error: any) {
      if (!isCancelled) {
        setError(error.message);
        setIsPending(false);
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

  return { signupWithEmailPassword, signInWithGoogleAccount, error, isPending };
};
