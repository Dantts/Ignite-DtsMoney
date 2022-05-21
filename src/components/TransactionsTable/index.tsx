import { useEffect, useState } from 'react';

import { ITransactionProps } from '../../models/transaction.model';
import { api } from '../../services/api';
import { Container } from './styles';

export const TransactionsTable = () => {
  const [transactions, setTransactions] = useState<ITransactionProps[]>([]);

  useEffect(() => {
    api
      .get(`/transactions`)
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction: ITransactionProps) => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                {transaction.type === "deposit" ? "" : "-"}
                {Intl.NumberFormat("pt-br", {
                  style: "currency",
                  currency: "BRL",
                }).format(transaction.amount)}
              </td>
              <td>{transaction.category}</td>
              <td>
                {Intl.DateTimeFormat("pt-br").format(
                  new Date(transaction.createAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
