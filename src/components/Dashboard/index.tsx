import { Cadastro } from '../Cadastro';
import { Container, Imagem } from './styles';
import backgroundImg from '../../assets/background.jpg';
import { useState } from 'react';
import { Registros } from '../Registros';

export function Dasboard() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  function handleOpenModal() {
    setIsOpenModal(true);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }
  return (
    <>
      <Container>
        <Imagem>
          <img src={backgroundImg} alt="Imagem de background " />
        </Imagem>
        <Cadastro onOpenModal={handleOpenModal} />
      </Container>
      <Registros isOpen={isOpenModal} onRequestClose={handleCloseModal} />
    </>
  );
}
