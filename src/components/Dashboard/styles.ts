import styled from 'styled-components';

export const Container = styled.main`
  display: flex;

  height: 100vh;
`;

export const Imagem = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  &::before {
    display: block;
    content: '';
    position: absolute;
    width: 100%;
    height: 100vh;
    background-color: rgba(33, 121, 181, 0.7);
  }
`;
