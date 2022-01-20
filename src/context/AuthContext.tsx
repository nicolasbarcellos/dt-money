import { User, onAuthStateChanged } from "@firebase/auth";
import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useReducer,
} from "react";

import { auth } from "../firebase";

interface AuthProviderProps {
  children: ReactNode;
}

interface AuthValues {
  authIsReady: boolean;
  dispatch: Dispatch<SetStateAction<any>>;
  user: User;
}

const authReducer = (state: any, action: any): any => {
  switch (action.type) {
    case "LOGIN":
      return {...state,  user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    case "AUTH_IS_READY":
      return { ...state, user: action.payload, authIsReady: true };
    default:
      return state;
  }
};

export const AuthContext = createContext<AuthValues>({} as AuthValues);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    authIsReady: false,
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      dispatch({ type: "AUTH_IS_READY", payload: user });
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};


