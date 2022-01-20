import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 :root {
   --bg: #F0F2F5;
   --white: #fff;
   --red: #e62e4d;
   --green: #33cc95;
   --purple: #5429cc;
   --purple-light: #6933ff;
   --heading: #363f5f;
   --text: #969cb3;
   --container: 1120px;
 }

 html {
   font-size: 62.50%;

   @media(max-width: 1080px) {
     font-size: 58%;
   }

 }

 html, body {
   overflow-x: hidden;
 }

 body {
   background: var(--bg);
   -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  scroll-behavior: smooth;
  scroll-snap-type: y

  &::-webkit-scrollbar {
    width: 1rem;
  }

  &::-webkit-scrollbar-track {
    /* box-shadow: inset 0 0 6px rgba(0, 0, 0, .6); */
  }

  &::-webkit-scrollbar-thumb {
    /* background: linear-gradient(#fff); */
  }
 }

 body, input, textarea, button {
  font: 400 1.6rem 'Poppins', sans-serif;
  @media (max-width: 1080px) {
      font-size: 1.5rem;
    }

    @media (max-width: 720px) {
      font-size: 1.4rem;
    }
 }

 h1, h2, h3, strong {
   font-weight: 600;
   font-size: 1.6rem;
 }

 button {
   cursor: pointer;
 }

 [disabled] {
   opacity: 0.6;
   cursor: not-allowed;
 }

 /* Modal Header */

 .react-modal-overlay {
   background-color: rgba(0, 0, 0, .5);
   position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
 }
 
 .react-modal-content {
   width: 100%;
   max-width: 57.6rem;
   background: var(--white);
   padding: 2rem;
   border-radius: .5rem;
   position: relative;
 }

 .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease-in-out;
}

.ReactModal__Overlay--after-open{
    opacity: 1;
}

.ReactModal__Overlay--before-close{
    opacity: 0;
}
`;
