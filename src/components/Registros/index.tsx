import { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { Container } from './styles';

interface DadosForm {
  name: string;
  email: string;
  cpf: string;
  telefone: string;
}

interface ResgistrosProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function Registros({ isOpen, onRequestClose }: ResgistrosProps) {
  const [dadosForm, setDadosForm] = useState<DadosForm[]>([]);

  useEffect(() => {
    const localStorageCadastros = JSON.parse(
      localStorage.getItem('@Leankwork:dados') || '{}'
    );
    setDadosForm(localStorageCadastros);
  }, [isOpen]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <table>
          <thead>
            <tr>
              <th>Nome:</th>
              <th>E-mail:</th>
              <th>CPF:</th>
              <th>Telefone:</th>
            </tr>
          </thead>

          <tbody>
            {dadosForm.map((dadosCadastrais) => (
              <tr key={dadosCadastrais.cpf}>
                <td>{dadosCadastrais.name}</td>
                <td>{dadosCadastrais.email}</td>
                <td>{dadosCadastrais.cpf}</td>
                <td>{dadosCadastrais.telefone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Modal>
  );
}
