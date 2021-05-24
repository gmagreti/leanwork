import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --overlay: #40c8f4;
    --background: #2179b5;

    --label-text: #999999;

    --border-color: #dbdbdb;

    --input-com-foco: #555555;
    --input-sem-foco: #efeeed;

    --text-title: #999999;
    --text-description: #000;
    --text-body: #969CB3;

    --button-on: #40c8f4;
    --button-text-on: #ffffff;

    --button-off: #f6f6f6;
    --button-text-off: #dddcdc;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {  
    @media (max-width: 1080px) {
      font-size: 93.75%; // 15px
    }

    @media (max-width: 720px) {
      font-size: 87.5%; // 14px
    }

    @media (max-width: 1080px) {
      font-size: 93.75px; // 15px
    }
  }

  body {
    overflow-y: hidden;
    --webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
    background: var(--button-off);
    color: var(--button-text-off);
  }
  .react-modal-overlay {
  background: rgba(0, 0, 0, 0.5);

  position: fixed; 
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  
  display: flex;
  align-items: center;
  justify-content: center;
  }

  .react-modal-content {
    max-width: 776px;
    width: 100%;

    background: var(--background);

    position: relative;
    
    border-radius: 0.4rem;
  }

`;
