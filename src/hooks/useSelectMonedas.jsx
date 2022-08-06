import styled from '@emotion/styled';
const Label = styled.label`
  color: white;
  font-family: 'Lato';
  display: block;
`;
function useSelectMonedas(texto, coleccionMonedas) {
  const SelectMonedas = () => (
    <>
      <Label>{texto}</Label>
      <select>
        <option value={''}>Selecciona una moneda</option>
        {coleccionMonedas.map((moneda) => (
          <option key={moneda.id} value={moneda.id}>
            {moneda.nombre}
          </option>
        ))}
      </select>
    </>
  );
  return [SelectMonedas];
}

export default useSelectMonedas;
