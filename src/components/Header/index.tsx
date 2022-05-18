import logo from '../../assets/logo.png';
import { Container, Content, LogoContainer } from './styles';

export const Header = () => {
  return (
    <Container>
      <Content>
        <LogoContainer>
          <img src={logo} alt="dts money" />
          <h3>Dts Money</h3>
        </LogoContainer>
        <button>Nova transação</button>
      </Content>
    </Container>
  );
};
