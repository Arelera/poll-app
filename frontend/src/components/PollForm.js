import { useState } from 'react';
import InputText from './InputText';
import Button from './Button';
import styled from 'styled-components';

import { createOne } from '../services/pollService';
import { useHistory } from 'react-router-dom';

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

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const filteredChoices = choices.filter((c) => c !== '');
    const choicesJson = JSON.stringify(
      filteredChoices.map((choice) => [choice, 0])
    );
    const poll = { question, choices: choicesJson, isPrivate };

    createOne(poll).then((createdPoll) => {
      console.log('CREATEDPOLLform: ', createdPoll);
      history.push(`/polls/${createdPoll.id}`);
    });
  };

  return (
    <Form onSubmit={handleFormSubmit}>
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
