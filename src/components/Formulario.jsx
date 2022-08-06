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
  &:hover {
    cursor: pointer;
    background-color: #7a7dfe;
  }
`;
const handleSubmit = (e) => {
  e.preventDefault();
};

function Formulario() {
  const [SelectMonedas] = useSelectMonedas('Selecciona tu moneda', monedas);
  return (
    <form onSubmit={handleSubmit}>
      <SelectMonedas />
      <InputSubmit type={'submit'} value={'Cotizar'} />
    </form>
  );
}

export default Formulario;
