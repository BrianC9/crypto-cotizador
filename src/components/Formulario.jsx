import styled from '@emotion/styled';
import useSelectMonedas from '../hooks/useSelectMonedas';
import { monedas } from '../data/monedas.js';
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
const handleSubmit = (e) => {
  e.preventDefault();
};

function Formulario() {
  const [monedaSeleccionada, SelectMonedas] = useSelectMonedas(
    'Selecciona tu moneda',
    monedas
  );
  // Algo a tener en cuenta a la hora de hacer un destructuring de un array:
  // No porque en nuestro custom hook, se llame SelectMonedas de la misma manera a la que lo hemos llamado en Formulario (aqui)
  // significa que vamos a obtenerlo, se hace por la posición del array, porque el SelectMonedas en el customHook se encuentra en la 2da posición
  // al igual que aquí cuando accedemos a él.
  // Cuando hacemos un object destructuring, si que debemos hacer que coincidan los nombres
  return (
    <form onSubmit={handleSubmit}>
      <SelectMonedas />
      <InputSubmit type={'submit'} value={'Cotizar'} />
    </form>
  );
}

export default Formulario;
