import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import InputText from './InputText';
import Button from './Button';
import Modal from './Modal';
import useModal from '../hooks/useModal';
import { createOne } from '../services/pollService';

const Form = styled.form`
  font-size: 1.1rem;
  button {
    margin-top: 0.5rem;
  }
`;

const PollForm = () => {
  const history = useHistory();
  const [question, setQuestion] = useState('');
  const [choices, setChoices] = useState(['', '', '']);
  const [isPrivate, setIsPrivate] = useState(false);

  const { modalMsg, setModal, removeModal } = useModal();

  const changeChoiceAtIndex = (index, value) => {
    const choicesCopy = [...choices];
    choicesCopy[index] = value;
    setChoices(choicesCopy);
  };

  const choiceRenderer = () => {
    if (choices.slice(-1)[0] !== '' && choices.length < 20) {
      setChoices([...choices, '']);
    }
    return choices.map((choice, i) => (
      <InputText
        key={i}
        value={choice}
        onChange={(e) => changeChoiceAtIndex(i, e.target.value)}
        placeholder="Enter choice"
      />
    ));
  };

  const duplicatesExist = (arr) => {
    const filteredArr = arr.filter((c) => c !== '');
    return new Set(filteredArr).size !== filteredArr.length;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const filteredChoices = choices.filter((c) => c !== '');
    if (filteredChoices.length < 2) {
      return setModal('Please provide at least 2 choices.');
    }

    if (duplicatesExist(choices)) {
      return setModal('Please remove duplicate choices.');
    }

    const choicesJson = JSON.stringify(
      filteredChoices.map((choice) => [choice, 0])
    );
    const poll = { question, choices: choicesJson, isPrivate };

    createOne(poll).then((createdPoll) => {
      history.push(`/polls/${createdPoll.id}`);
    });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      {modalMsg && <Modal onClick={removeModal} message={modalMsg} />}
      <label>
        <InputText
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          size="large"
          placeholder="Type question here"
        />
      </label>
      {choiceRenderer()}
      <Button type="submit" size="large" primary={true}>
        Submit
      </Button>{' '}
      <label>
        <input
          type="checkbox"
          checked={isPrivate}
          onChange={() => setIsPrivate(!isPrivate)}
        />{' '}
        Private
      </label>
    </Form>
  );
};

export default PollForm;
