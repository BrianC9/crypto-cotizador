import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas.js';
import { useEffect, useState } from 'react';
import { getTopListByMarketCap } from '../data/services';
import Error from './Error';
const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  width: 100%;
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  transition: background-color 0.3s ease;
  margin-top: 30px;
  &:hover {
    cursor: pointer;
    background-color: #7a7dfe;
  }
`;

function Formulario() {
  const [criptos, setCriptos] = useState(
    localStorage.getItem('coleccionCriptos')
      ? JSON.parse(localStorage.getItem('coleccionCriptos'))
      : []
  );
  const [error, setError] = useState(false);
  const [monedaSeleccionada, SelectMonedas] = useSelectMonedas(
    'Selecciona tu moneda',
    monedas
  );
  const [criptoSeleccionada, SelectCriptoMonedas] = useSelectMonedas(
    'Selecciona la criptomoneda',
    criptos
  );

  // Algo a tener en cuenta a la hora de hacer un destructuring de un array:
  // Algo a tener en cuenta a la hora de hacer un destructuring de un array:
  // No porque en nuestro custom hook, se llame SelectMonedas de la misma manera a la que lo hemos llamado en Formulario (aqui)
  // significa que vamos a obtenerlo, se hace por la posición del array, porque el SelectMonedas en el customHook se encuentra en la 2da posición
  // al igual que aquí cuando accedemos a él.
  // Cuando hacemos un object destructuring, si que debemos hacer que coincidan los nombres

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if ([monedaSeleccionada, criptoSeleccionada].includes('')) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3333);
      return;
    }
    console.log(monedaSeleccionada, criptoSeleccionada);
  };
  useEffect(() => {
    if (!localStorage.getItem('coleccionCriptos')) {
      let coleccionCriptos;
      getTopListByMarketCap().then((data) => {
        coleccionCriptos = data.Data.map((cripto) => {
          return {
            id: cripto.CoinInfo.Name,
            nombre: cripto.CoinInfo.FullName,
            simbolo: cripto.DISPLAY?.USD?.FROMSYMBOL ?? '©',
          };
        });

        setCriptos(coleccionCriptos);
        localStorage.setItem(
          'coleccionCriptos',
          JSON.stringify(coleccionCriptos)
        );
      });
    }
  }, []);
  return (
    <>
      {error && <Error>Todos los campos son obligatorios</Error>}
      <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptoMonedas />
        <InputSubmit type={'submit'} value={'Cotizar'} />
      </form>
    </>
  );
}

export default Formulario;
