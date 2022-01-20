import ReactModal from "react-modal";
import { ContentForm, TransactionTypeContainer, RadioBox } from "./style";

import closeSvg from "../../assets/fechar.svg";
import incomeSvg from "../../assets/entradas.svg";
import outcomeSvg from "../../assets/saidas.svg";
import { useState } from "react";

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useModalCtx } from "../../context/ModalContext";
import { useFirestore } from "../../hooks/useFirestore";
import { Loading } from "../Loading";
import { useAuth } from "../../hooks/useAuth";

interface formValues {
  categoria: string;
  valor: number;
  titulo: string;
}

ReactModal.setAppElement("#root"); // acessibility

const validateSchema = yup.object().shape({
  titulo: yup.string().required("Informe um título"),
  valor: yup
    .number()
    .typeError("Informe um valor")
    .integer("")
    .required("Informe um valor"),
  categoria: yup.string().required("Informe uma categoria"),
});

export default function Modal() {
  const [type, setType] = useState("null");
  const { modalIsOpen, setModalIsOpen } = useModalCtx();
  const { isPending, addDocument } = useFirestore("transactions");
  const { user } = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ resolver: yupResolver(validateSchema) });

  async function uploadData(values: formValues, event: any) {
    await addDocument({ ...values, type, uid: user.uid });
    if (!isPending) {
      reset();
    }
  }

  return (
    <ReactModal
      closeTimeoutMS={500}
      onRequestClose={() => setModalIsOpen(false)}
      isOpen={modalIsOpen}
      overlayClassName={"react-modal-overlay"}
      className={"react-modal-content"}
    >
      <ContentForm onSubmit={handleSubmit(uploadData)}>
        <img
          onClick={() => setModalIsOpen(false)}
          src={closeSvg}
          alt="Fechar"
        />
        <h2>Cadastrar transação</h2>
        <div>
          <input
            className={`${errors.titulo ? "error" : ""}`}
            {...register("titulo")}
            type="text"
            placeholder="Título"
          />
          {errors.titulo && (
            <p className="errorMessage">{errors.titulo?.message}</p>
          )}
          <input
            className={`${errors.valor ? "error" : ""}`}
            {...register("valor")}
            type="number"
            placeholder="Valor"
          />
          {errors.valor && (
            <p className="errorMessage">{errors.valor?.message}</p>
          )}
          <TransactionTypeContainer>
            <RadioBox
              isActive={type === "deposit"}
              onClick={() => setType("deposit")}
              activeColor="green"
            >
              <img src={incomeSvg} alt="Income" />
              <span>Entrada</span>
            </RadioBox>
            <RadioBox
              isActive={type === "withdraw"}
              onClick={() => setType("withdraw")}
              activeColor="red"
            >
              <img src={outcomeSvg} alt="Outcome" />
              <span>Saída</span>
            </RadioBox>
          </TransactionTypeContainer>
          <input
            className={`${errors.categoria ? "error" : ""}`}
            {...register("categoria")}
            type="text"
            placeholder="Categoria"
          />
          {errors.categoria && (
            <p className="errorMessage">{errors.categoria?.message}</p>
          )}
          {isPending ? (
            <Loading className="button" color="#33cc95" />
          ) : (
            <button className="button" disabled={!isValid} type="submit">
              Cadastrar
            </button>
          )}
        </div>
      </ContentForm>
    </ReactModal>
  );
}
