import { useState } from 'react';

const useModal = (msg) => {
  const [modalMsg, setMessage] = useState(msg || '');
  const setModal = (message) => setMessage(message);
  const removeModal = () => setMessage();
  return { modalMsg, setModal, removeModal };
};

export default useModal;
