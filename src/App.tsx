import { createServer, Model } from 'miragejs';
import React, { useState } from 'react';
import ReactModal from 'react-modal';

import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from './Pages/Dashboard';
import { GlobalStyle } from './styles/global';

createServer({
  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return this.schema.all("transaction");
    });

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    });
  },
});

ReactModal.setAppElement("#root");

export function App() {
  const [isNewTransactionsOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />
      <GlobalStyle />
      <NewTransactionModal
        isOpen={isNewTransactionsOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
    </>
  );
}
