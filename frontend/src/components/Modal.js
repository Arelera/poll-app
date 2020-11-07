import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  background: hsla(0, 0%, 0%, 0.6);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  color: #333;
  text-align: center;
  width: 600px;
  height: 300px;
  padding: 1rem 2rem;
  background: #fafafa;
  border-radius: 10px;
  border: 1px solid #aaa;
  box-shadow: 0px 2px 5px #444;
  flex-shrink: none;
  position: relative; /* for ButtonX */

  display: flex;
  justify-content: center;
  h3 {
    font-size: 2.5rem;
    font-weight: 500;
    display: block;
    align-self: center;
  }
`;

const ButtonX = styled.button`
  color: #c33c54;
  border: none;
  font-weight: 600;
  font-size: 2rem;
  background: none;
  position: absolute;
  top: 12px;
  right: 18px;
  cursor: pointer;
  :hover {
    text-shadow: 1px 1px 1px #aaa;
  }
`;

const Modal = ({ message, onClick }) => {
  return createPortal(
    <Background onClick={onClick}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <ButtonX onClick={onClick}>X</ButtonX>
        <h3>{message}</h3>
      </ModalBox>{' '}
    </Background>,
    document.getElementById('modal')
  );
};

export default Modal;
