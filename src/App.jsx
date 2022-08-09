import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Formulario from './components/Formulario';
import Resultado from './components/Resultado';
import { getCurrentTradingPrice } from './data/services';
import imgPortada from './img/imagen-criptos.png';
const Contenedor = styled.div`
  max-width: 900px;
  margin: auto auto;
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  padding-top: 50px;
  gap: 100px;
  @media (max-width: 450px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const ImagenPortada = styled.img`
  max-width: 400px;
  width: 80%;

  display: block;
`;
const Heading = styled.h1`
  color: white;
  font-family: 'lato';
  font-weight: 700;
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
  const [resultado, setResultado] = useState({});
  useEffect(() => {
    if (Object.keys(monedasConsulta).length > 0) {
      const { monedaSeleccionada: moneda, criptoSeleccionada: cripto } =
        monedasConsulta;
      getCurrentTradingPrice(cripto, moneda)
        .then((data) => setResultado(data.DISPLAY[cripto][moneda]))
        .catch((error) =>
          console.error('Error en el uso de getCurrentTradingPrice', error)
        );
    }
  }, [monedasConsulta]);
  return (
    <>
      <Contenedor>
        <ImagenPortada src={imgPortada} alt={'Imagen criptomonedas'} />
        <div>
          <Heading>Cotizador de Criptomonedas</Heading>
          <Formulario setMonedasConsulta={setMonedasConsulta} />
        </div>
      </Contenedor>
      {resultado.PRICE && (
        <Resultado resultado={resultado} monedasConsulta={monedasConsulta} />
      )}
    </>
  );
}

export default App;
