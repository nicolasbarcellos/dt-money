import styled from "styled-components";
import { darken, transparentize } from "polished";

export const ContentForm = styled.form`
  > img {
    display: block;
    cursor: pointer;
    margin-left: auto;
    transition: filter 0.2s;

    :hover {
      filter: brightness(0.8);
    }
  }

  h2 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 3.6rem;
    color: var(--heading);
    margin: 2rem 0 3rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  & input {
    border-radius: 5px;
    background: #e7e9ee;
    border: 1px solid #d7d7dd;
    color: var(--text);
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 2.4rem;
    height: 6.4rem;
    padding: 0 2rem;

    :focus {
      outline: none;
      border: 2px solid #d7d7dd;
    }

    ::placeholder {
      color: var(--text);
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 2.4rem;
    }
  }

  .button {
    height: 6.4rem;
    background: var(--green);
    color: var(--white);
    border-radius: 0.5rem;
    border: 0;
    transition: filter 0.2s;
    font-weight: 600;
    line-height: 2.4rem;

    :hover {
      filter: brightness(0.95);
    }
  }

  .errorMessage {
    color: #e52e40;
    display: block;
    font-size: 1.4rem;
  }

  .error {
    background: ${transparentize(0.9, "#e52e40")};
  }
`;

export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;

interface RadioBoxProps {
  isActive: boolean;
  activeColor: "green" | "red";
}

const colors = {
  green: "#33cc95",
  red: "#e52e40",
};

export const RadioBox = styled.button<RadioBoxProps>`
  border: 1.5px solid #d7d7dd;
  height: 6.4rem;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  transition: border-color 0.2s;

  background: ${({ isActive, activeColor }) =>
    isActive ? transparentize(0.8, colors[activeColor]) : "transparent"};

  &:hover {
    border-color: ${darken(0.1, "#d7d7d7")};
  }

  img {
    width: 2.5rem;
    height: 2.5rem;
  }

  span {
    display: inline-block;
    font-weight: normal;
    line-height: 2.4rem;
    font-size: 1.6rem;
    color: var(--heading);
  }
`;
