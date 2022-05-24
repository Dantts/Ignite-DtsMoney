import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  :root {
    --black: #000000;

    --red: #e52e4d;

    --blue: #5429cc;
    --blue-light: #6933ff;

    --green: #33CC95;
    
    --text-title: #363f5f;
    --text-body: #969cb3;
    
    --background: #f0f2f5;
    --shape: #ffffff;
  }


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // REM - 1rem = font-size
  // font-size 16px; (Desktop)

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }
  }


  body {
    background: var(--background);
    -webkit-font-alignment: alignment;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  .react-modal-overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    background-color: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;

    -webkit-animation-name: zoomIn;
      animation-name: zoomIn;
    -webkit-animation-duration: 0.35s;
    animation-duration: 0.35s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .modal-close {
    -webkit-animation-name: zoomOut;
      animation-name: zoomOut;
    -webkit-animation-duration: 0.35s;
    animation-duration: 0.35s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;
    transition: all 0.2s;
    
    &:hover {
      transform: scale(120%);
      filter: brightness(0.8);
    }
  }

  @-webkit-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }
    50% {
      opacity: 1;
    }
    }
    @keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }
    50% {
      opacity: 1;
    }
  } 

   @-webkit-keyframes zoomOut {
    0% {
      opacity: 1;
    }
    
    50% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }
    100% {
      opacity: 0;
    }
    }
    @keyframes zoomOut {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
        -webkit-transform: scale3d(.3, .3, .3);
        transform: scale3d(.3, .3, .3);
      }
      100% {
        opacity: 0;
      }
  } 
`;
