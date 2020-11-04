import styled from 'styled-components';

const ButtonEl = styled.button`
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid ${(props) => (props.primary ? '#ddd' : '#FF8811')};
  box-shadow: 0px 2px 5px #ddd;
  border-radius: 8px;
  min-height: 35px;
  padding: ${(props) => (props.size === 'large' ? '12px 24px' : '6px 10px')};

  background: ${(props) => (props.primary ? '#FF8811' : 'transparent')};
  color: ${(props) => (props.primary ? '#FFF8F0' : '#333')};
  :hover {
    background: ${(props) => (props.primary ? '#E07000' : '#fafafafa')};
    color: ${(props) => (props.primary ? '#FFF8F0' : '#333')};
  }
  cursor: pointer;
`;

const Button = ({ children, onClick, primary, size }) => {
  return (
    <ButtonEl primary={primary} size={size} onClick={onClick}>
      {children}
    </ButtonEl>
  );
};

export default Button;
