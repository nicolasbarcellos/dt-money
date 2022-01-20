import styled from "styled-components";

export const Header = styled.header`
  background: linear-gradient(45deg, var(--purple-light), var(--purple));
  max-width: 100%;
  width: 100%;
  padding: 0 2rem;

  .header-content {
    max-width: 1200px;
    width: 100%;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 8rem;

    img {
      height: 4rem;
      display: block;
      max-width: 100%;
    }

    nav {
      .active {
        border-bottom: 4px solid var(--green);
        border-radius: 4px;
        color: rgba(255, 255, 255, 0.8);
      }

      a {
        position: relative;
        padding-bottom: 1rem;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 600;
        display: inline-block;
        font-size: 2rem;
        transition: all 0.3s;

        &:hover {
          filter: brightness(0.9);
        }

        & + a {
          margin-left: 2rem;
        }
      }
    }
  }
`;

export const Container = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 2rem;
  max-width: 100%;
  position: relative;
  background: var(--white);

  .formContainer {
    max-width: 1200px;
    width: 100%;
    height: 70rem;
    border-radius: 1rem;
    overflow: hidden;
    z-index: 1;
    display: flex;
    align-items: center;
    position: relative;
    box-shadow: 2rem 2rem 5rem rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);

    @media (max-width: 870px) {
      flex-direction: column;
      box-shadow: 2rem 2rem 7rem rgba(0, 0, 0, 0.5);
      height: 100%;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;

  @media (max-width: 980px) {
    padding: 0 6rem;
  }

  @media (max-width: 870px) {
    padding: 0 2rem;
    width: 80%;
  }

  h3 {
    align-self: flex-start;
    color: var(--heading);
    font-weight: 600;
    line-height: 0.5em;
    white-space: nowrap;
    font-size: 3.2rem;
  }

  p {
    align-self: flex-start;
    color: var(--text);
    font-weight: 300;
  }

  .input {
    align-self: flex-start;
    display: block;
    width: 100%;
    line-height: 3rem;
    color: var(--heading);
    font-weight: 500;
    font-size: 1.4rem;

    span {
      display: block;
    }

    input {
      width: 100%;
      color: var(--heading);
      border: 0;
      outline: 1px solid #c4c6cb;
      border-radius: 4px;
      height: 4rem;
      padding: 0 2rem;

      &::placeholder {
        color: var(--text);
        font-size: 1.4rem;
      }

      &:focus {
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
      }
    }
  }

  button {
    outline: none;
    border: 0;
    border-radius: 4px;
    width: 100%;
    height: 5rem;
  }

  .btn-signin {
    background: var(--purple-light);
    color: var(--white);
    font-weight: 600;
    transition: all 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  .btn-google {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    border: 1px solid #c4c6cb;
    background: var(--white);
    color: var(--heading);
    font-weight: 500;
    transition: all 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  a {
    text-decoration: none;
    display: inline-block;
    color: var(--heading);
    font-weight: 600;
    font-size: 1.4rem;
    transition: all 0.3s;

    &:hover {
      opacity: 0.9;
    }
  }

  .bottom-content {
    text-align: center;
    span {
      margin-right: 0.7rem;
      font-size: 1.4rem;
      color: var(--text);
    }
  }
`;

export const Picture = styled.div`
  height: 100%;
  width: 50%;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  @media (max-width: 870px) {
    display: none;
  }

  .user-text {
    box-shadow: 2rem 2rem 5rem rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.5);
    background: rgba(0, 0, 0, 0.3);
    overflow: hidden;
    border-radius: 1rem;
    position: relative;
    bottom: 4rem;
    z-index: 1;
    width: 80%;
    padding: 2.5rem 2rem;
    color: var(--white);

    p {
      font-weight: 600;
      font-size: 2.4rem;

      .highlight {
        background: linear-gradient(
          to left,
          var(--purple),
          var(--purple-light)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    .user {
      display: flex;
      justify-content: space-between;
      margin-top: 3rem;

      span {
        font-weight: 600;
        font-size: 3rem;
      }
    }

    .user-company {
      display: flex;
      align-items: center;
      margin-top: 2rem;

      span {
        margin-right: auto;
        font-weight: 500;
        font-size: 1.4rem;
      }

      .arrow {
        cursor: pointer;
        display: flex;
        align-items: center;
        border: 1px solid var(--white);
        border-radius: 50%;
        padding: 1rem;
        margin-left: 2rem;
      }
    }
  }

  img {
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Checkbox = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 100%;
  width: 100%;

  @media(max-width: 490px) {
    justify-content: center;
  }
  

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    font-size: 1.4rem;
    color: var(--heading);
    font-weight: 500;
    cursor: pointer;
  }

  span:before {
    content: "";
    border-radius: 4px;
    border: 1px solid #c4c6cb;
    display: inline-block;
    min-width: 1.6rem;
    height: 1.6rem;
    background: var(--white);
  }

  input[type="checkbox"] {
    opacity: 0;
    z-index: -1;
    position: absolute;
  }

  input[type="checkbox"]:checked + span:before {
    content: "";
    background: var(--purple);
  }

  a {   
    display: block;
  }
`;
