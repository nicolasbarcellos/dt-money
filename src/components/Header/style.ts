import styled from "styled-components";

export const Container = styled.header`
  background: linear-gradient(45deg, var(--purple-light), var(--purple));
  max-width: 100%;
`;

export const Content = styled.div`
  max-width: var(--container);
  margin: 0 auto;
  width: 100%;
  padding: 3rem 1.6rem 16rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  img {
    cursor: pointer;
    height: 4rem;
    display: block;
    max-width: 100%;
    margin-right: auto;

    @media (max-width: 460px) {
      flex-basis: 100%;
      margin-bottom: 2rem;
    }
  }

  button {
    height: 4.8rem;
    color: var(--white);
    background: var(--purple-light);
    border: 0;
    padding: 0 3rem;
    border-radius: 0.5rem;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }

    @media (max-width: 460px) {
      padding: 0 2rem;
    }
  }
`;

export const UserBox = styled.div`
  width: 5rem;
  height: 5rem;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  margin-left: 3rem;

  &::before {
    content: "Sign out";
    white-space: nowrap;
    position: absolute;
    color: var(--white);
    left: 0px;
    opacity: 0;
    visibility: hidden;
    background: var(--purple-light);
    transition: all 0.5s ease;
    padding: 0.5rem 1rem;
    font-size: 1.4rem;
    font-weight: normal;
    border-radius: 0.5rem;
  }

  &:hover::before {
    opacity: 1;
    visibility: visible;
    left: 110%;
  }

  img {
    display: block;
    object-fit: cover;
    width: 100%;
    height: 100%;
    border: 1px solid var(--white);
    border-radius: 50%;
  }
`;
