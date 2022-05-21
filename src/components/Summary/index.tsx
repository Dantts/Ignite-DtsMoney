import icomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransacions';
import { Container } from './styles';

export const Summary = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeImage} alt="Entradas" />
        </header>
        <strong>
          {Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImage} alt="Saidas" />
        </header>
        <strong>
          -{" "}
          {Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>
          {Intl.NumberFormat("pt-br", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </Container>
  );
};
