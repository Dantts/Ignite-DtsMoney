import { useState } from 'react';

import logo from '../../assets/logo.png';
import { Container, Content, LogoContainer } from './styles';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={logo} alt="dts money" />
          <h3>Dts Money</h3>
        </LogoContainer>
        <button onClick={onOpenNewTransactionModal}>Nova transação</button>
      </Content>
    </Container>
  );
};
