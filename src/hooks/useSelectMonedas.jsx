import styled from '@emotion/styled';
import { useState } from 'react';
const Label = styled.label`
  color: white;
  font-family: 'Lato';
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;
const Select = styled.select`
  border: none;
  outline: none;
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  font-size: 14px;
`;

function useSelectMonedas(texto, coleccionMonedas) {
  const [state, setState] = useState('');
  const SelectMonedas = () => (
    <>
      <Label>{texto}</Label>
      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value={''}>Selecciona una moneda</option>
        {coleccionMonedas.map((moneda) => (
          <option key={moneda.id} value={moneda.id}>
            {`${moneda.nombre} - ${moneda.simbolo}`}
          </option>
        ))}
      </Select>
    </>
  );
  return [state, SelectMonedas];
}

export default useSelectMonedas;
