import React from 'react';

import { Header } from './components/Header';
import { Dashboard } from './Pages/Dashboard';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <>
      <Header />
      <Dashboard />
      <GlobalStyle />
    </>
  );
}
