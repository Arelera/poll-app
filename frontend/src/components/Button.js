import styled from 'styled-components';

const ButtonEl = styled.button`
  padding: 6px 7px;
  border: 1px solid #ddd;
  box-shadow: 0px 2px 5px #ddd;
  background: #fafafa;
  border-radius: 4px;
  font-weight: 600;
  color: #333;
  cursor: pointer;
`;

const Button = ({ children, onClick }) => {
  return <ButtonEl onClick={onClick}>{children}</ButtonEl>;
};

export default Button;
