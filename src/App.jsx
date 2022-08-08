import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import { getCurrentTradingPrice } from './data/services';
import imgPortada from './img/imagen-criptos.png';
const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const ImagenPortada = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;
const Heading = styled.h1`
  color: white;
  font-family: 'lato';
  font-weight: 700;
  margin: 100px 50px;
  text-align: center;
  &::after {
    content: '';
    width: 120px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 5px auto;
  }
`;
function App() {
  const [monedasConsulta, setMonedasConsulta] = useState({});
  useEffect(() => {
    if (Object.keys(monedasConsulta).length > 0) {
      const { monedaSeleccionada: moneda, criptoSeleccionada: cripto } =
        monedasConsulta;
      getCurrentTradingPrice(cripto, moneda)
        .then((data) => console.log(data.DISPLAY[cripto][moneda]))
        .catch((error) =>
          console.error('Error en el uso de getCurrentTradingPrice', error)
        );
    }
  }, [monedasConsulta]);
  return (
    <Contenedor>
      <ImagenPortada src={imgPortada} alt={'Imagen criptomonedas'} />
      <div>
        <Heading>Cotizador de Criptomonedas</Heading>
        <Formulario setMonedasConsulta={setMonedasConsulta} />
      </div>
    </Contenedor>
  );
}

export default App;
