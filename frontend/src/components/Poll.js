import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const H2 = styled.h2`
  font-size: 1.75rem;
  color: #333;
  padding: 0.5rem;
  border-bottom: 2px solid #9dd9d2;
`;

const Ul = styled.ul`
  padding: 0.5rem 0;
`;

const Li = styled.li`
  color: #333;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0.25rem;
  font-size: 1.1rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  button:last-child {
    margin-left: 0.5rem;
  }
`;

const Poll = ({ poll }) => {
  const history = useHistory();
  const [checkedChoice, setCheckedChoice] = useState('');

  const checkHandler = (choice) => {
    setCheckedChoice(choice);
  };

  const handleResultsClick = (id) => {
    history.push(`/polls/${id}/results`);
  };

  const handleSubmit = (id) => {
    history.push(`/polls/${id}/results`);
  };

  return (
    <div>
      <H2>{poll.question}</H2>
      <Ul>
        {poll.choices.map(([choice]) => (
          <Li key={choice}>
            <label>
              <input
                onChange={() => checkHandler(choice)}
                checked={checkedChoice === choice}
                name="choice"
                type="radio"
              />{' '}
              {choice}
            </label>
          </Li>
        ))}
      </Ul>
      <Buttons>
        <Button
          onClick={() => handleSubmit(poll.id)}
          size="large"
          primary={true}
        >
          Submit
        </Button>
        <div>
          <Button onClick={() => handleResultsClick(poll.id)} size="large">
            Results
          </Button>
          <Button size="large">Copy link</Button>
        </div>
      </Buttons>
    </div>
  );
};

export default Poll;
