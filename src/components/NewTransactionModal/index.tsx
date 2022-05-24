import { FormEvent, useState } from 'react';
import ReactModal from 'react-modal';

import closeImg from '../../assets/close.svg';
import icomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransacions';
import { Container, RadioBox, TransactionTypeContainer } from './styles';

interface NewTranssactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export const NewTransactionModal = ({
  isOpen,
  onRequestClose,
}: NewTranssactionModalProps) => {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [type, setType] = useState("deposit");
  const [category, setCategory] = useState("");
  const [isClose, setIsClose] = useState(false);

  async function handleCreateNewTransaction(e: FormEvent) {
    e.preventDefault();
    await createTransaction({ title, amount, category, type });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    closeModal();
  }

  function closeModal() {
    setIsClose(true);
    setTimeout(() => {
      onRequestClose();
      setIsClose(false);
    }, 200);
  }

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="react-modal-overlay"
      className={`react-modal-content ${isClose ? "modal-close" : ""}`}
    >
      <button type="button" onClick={closeModal} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input
          type="text"
          placeholder="Título"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => setAmount(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={icomeImage} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={outcomeImage} alt="Saída" /> <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </Container>
    </ReactModal>
  );
};
