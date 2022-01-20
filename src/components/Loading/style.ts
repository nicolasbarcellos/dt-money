import styled, { css } from "styled-components";

interface ColorProps {
  color: string;
}

export const Button = styled.button<ColorProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(props) => props.color} 

  };

  .dot {
    position: relative;
    display: inline-block;
    width: 1.4rem;
    height: 1.4rem;
    background: rgba(255, 255, 255, .6);
    box-shadow: 0 0 10px rgba(255, 255, 255, .4) , 0 0 20px rgba(255, 255, 255, .4); ,
      0 0 40px rgba(255, 255, 255, .4); , 0 0 60px rgba(255, 255, 255, .4); ;
    border-radius: 50%;
    margin: 0 1rem;
    animation: animateDot 2s linear infinite;
    transform: scale(0.3);

    &:nth-child(1) {
      animation-delay: calc(0.1s * 0);
    }
    &:nth-child(2) {
      animation-delay: calc(0.1s * 1);
    }
    &:nth-child(3) {
      animation-delay: calc(0.1s * 2);
    }
    &:nth-child(4) {
      animation-delay: calc(0.1s * 3);
    }
    &:nth-child(5) {
      animation-delay: calc(0.1s * 4);
    }
  }

  @keyframes animateDot {
    0% {
      transform: scale(0.3);
    }

    10% {
      transform: scale(1);
    }

    50% {
      transform: scale(0.3);
    }
    100% {
      transform: scale(0.1);
    }
  }
`;
