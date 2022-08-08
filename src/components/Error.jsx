import styled from '@emotion/styled';
const ErrorStyled = styled.div`
  background-color: #a92b28;
  font-family: 'Lato';
  font-size: 18px;
  font-weight: 700;
  color: white;
  padding: 10px 5px;
  border-radius: 10px;
  border: 1px solid white;
  text-align: center;
`;
export default function Error({ children }) {
  return <ErrorStyled>{children}</ErrorStyled>;
}
