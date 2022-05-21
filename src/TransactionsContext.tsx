import { createContext, ReactNode, useEffect, useState } from 'react';

import { ITransactionProps } from './models/transaction.model';
import { api } from './services/api';

const INITIAL_STATE: ITransactionProps[] = [];

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: ITransactionProps[];
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

type TransactionInput = Omit<ITransactionProps, "id" | "createdAt">;

export const TransactionsProvider = ({
  children,
}: TransactionsProviderProps) => {
  const [transactions, setTransactions] = useState<ITransactionProps[]>([]);

  useEffect(() => {
    api
      .get(`/transactions`)
      .then((res) => setTransactions(res.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post("/transactions", transactionInput);
    const { transaction } = response.data;

    setTransactions((oldState) => [...oldState, transaction]);
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
