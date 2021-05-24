import { Container, Input } from './styles';
import arrowImg from '../../assets/arrow.svg';
import { FormEvent, useEffect, useState } from 'react';

interface DadosForm {
  name: string;
  email: string;
  cpf: string;
  telefone: string;
}

interface HeaderProps {
  onOpenModal: () => void;
}

export function Cadastro({ onOpenModal }: HeaderProps) {
  const maskCPF = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1');
  };

  const maskPhone = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{5})(\d)/, '$1-$2')
      .replace(/(-\d{4})(\d+?)$/, '$1');
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [telefone, setTelefone] = useState('');
  const [dadosForm, setDadosForm] = useState<DadosForm[]>(() => {
    const storageDadosForm = localStorage.getItem('@Leankwork:dados');
    if (storageDadosForm) {
      return JSON.parse(storageDadosForm);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('@Leankwork:dados', JSON.stringify(dadosForm));
  }, [dadosForm]);

  function handleCreateNewRegister(event: FormEvent) {
    event.preventDefault();
    const data = { name, email, cpf, telefone };
    const dadosCadastrados = data;

    setDadosForm([...dadosForm, dadosCadastrados]);
    localStorage.setItem('@Leankwork:dados', JSON.stringify(dadosForm));
  }
  return (
    <Container onSubmit={handleCreateNewRegister}>
      <h2>Lean Cadastro</h2>
      <Input>
        <label htmlFor="">Nome Completo</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </Input>
      <Input>
        <label htmlFor="">E-mail</label>
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </Input>
      <Input>
        <label htmlFor="">CPF</label>
        <input
          type="text"
          value={cpf}
          onChange={(event) => setCpf(maskCPF(event.target.value))}
        />
      </Input>
      <Input>
        <label htmlFor="">Telefone</label>
        <input
          type="tel"
          value={telefone}
          onChange={(event) => setTelefone(maskPhone(event.target.value))}
        />
      </Input>
      <div>
        <button type="submit" disabled={!name || !email || !cpf || !telefone}>
          Cadastrar
        </button>
        <button type="button" onClick={onOpenModal}>
          Ver Cadastros <img src={arrowImg} alt="Arrow right" />
        </button>
      </div>
    </Container>
  );
}
