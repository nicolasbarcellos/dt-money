import {
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useContext,
} from "react";

interface ModalProviderProps {
  children: ReactNode;
}

interface ModalProviderValues {
  modalIsOpen: boolean;
  setModalIsOpen: Dispatch<SetStateAction<boolean>>;
}

export const ModalContext = createContext<ModalProviderValues>(
  {} as ModalProviderValues
);

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
};


export const useModalCtx = () => {
  const ctx = useContext(ModalContext)
  return ctx;
}