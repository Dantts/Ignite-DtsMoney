import icomeImage from '../../assets/income.svg';
import outcomeImage from '../../assets/outcome.svg';
import totalImage from '../../assets/total.svg';
import { Container } from './styles';

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={icomeImage} alt="Entradas" />
        </header>
        <strong>R$1000</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImage} alt="Saidas" />
        </header>
        <strong>- R$500</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={totalImage} alt="Total" />
        </header>
        <strong>R$500</strong>
      </div>
    </Container>
  );
};
