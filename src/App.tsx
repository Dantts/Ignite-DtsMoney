import { createServer } from 'miragejs';
import React from 'react';

import { Header } from './components/Header';
import { Dashboard } from './Pages/Dashboard';
import { GlobalStyle } from './styles/global';

createServer({
  routes() {
    this.namespace = "api";
    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "transactions 1",
          amount: 400,
          type: "deposit",
          category: "Food",
          createAt: "21/02/2022",
        },
      ];
    });
  },
});

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
