import styled from 'styled-components';

export const Container = styled.form`
  max-width: 360px;
  width: 100%;
  padding: 3rem 2.5rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 300;
    margin-bottom: 2rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    button:first-child {
      background: var(--button-on);
      color: var(--button-text-on);
      border: 0;
      border-radius: 4rem;
      padding: 0.5rem 2.5rem;

      transition: opacity 0.2s;

      &:hover {
        opacity: 70%;
      }
    }

    button:last-child {
      display: flex;
      align-items: center;
      border: 0;
      background: transparent;

      img {
        width: 0.7rem;
        height: 0.5rem;
        margin-left: 0.25rem;
      }
    }
  }

  @media (max-width: 1085px) {
    max-width: 560px;

    padding: 0.5rem 1rem;

    h2 {
      font-size: 0.5rem;
      margin-bottom: 0.5rem;
    }

    div {
      flex-direction: column;
      button:first-child {
        padding: 0.25rem 1.5rem;
        &:first-child {
          margin-right: 0;
        }
      }
      button:last-child {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 0.25rem;

        img {
          width: 15px;
          margin-left: 10px;
        }
      }
    }
  }

  @media (max-width: 1085px) {
    padding: 20px;
  }
`;

export const Input = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: var(--label-text);
    font-size: 0.75rem;
    font-weight: 600;
  }
  input {
    padding: 0.5rem 0 0.25rem;
    border: 0;
    border-bottom: 1px solid var(--border-color);
    color: var(--input-sem-foco);

    outline: none;
    &:focus {
      color: var(--input-com-foco);
    }
  }

  & + div {
    margin-top: 2rem;
  }
  @media (max-width: 1085px) {
    label {
      font-size: 0.25rem;
    }
    input {
      padding: 0.25rem 0;
    }
    & + div {
      margin-top: 0.25rem;
    }
  }
`;
