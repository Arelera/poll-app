import styled from 'styled-components';

const Input = styled.input`
  color: #333;
  border: none;
  border-bottom: solid ${(props) => (props.size ? '2px #9DD9D2' : '1px #aaa')};
  padding: 0.75rem 0.5rem;
  width: 100%;
  font-size: ${(props) => (props.size ? '1.25rem' : '1.1rem')};
`;

const InputText = ({ placeholder, size, onChange }) => {
  return (
    <Input
      onChange={onChange}
      type="text"
      placeholder={placeholder}
      size={size}
    />
  );
};

export default InputText;
