import styled from '@emotion/styled';
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
function Formulario() {
  return (
    <form>
      <InputSubmit type={'submit'} value={'Cotizar'} />
    </form>
  );
}

export default Formulario;
