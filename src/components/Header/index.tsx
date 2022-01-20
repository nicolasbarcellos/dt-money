import * as S from "./style";

import logoImg from "../../assets/logo.svg";
import userDefaultImg from "../../assets/user-default.png";
import Modal from "../Modal";
import { useModalCtx } from "../../context/ModalContext";
import { useAuth } from "../../hooks/useAuth";
import { useLogout } from "../../hooks/useLogout";

export function Header() {
  const { setModalIsOpen } = useModalCtx();
  const { user } = useAuth();
  const { logout } = useLogout();

  return (
    <S.Container>
      <S.Content>
        <img src={logoImg} alt="dtmoney" />

        <button onClick={() => setModalIsOpen(true)} type="submit">
          Nova aplicação
        </button>
        <S.UserBox onClick={logout}>
          <img src={user.photoURL ? user.photoURL : userDefaultImg} alt={""} />
        </S.UserBox>

        <Modal />
      </S.Content>
    </S.Container>
  );
}
