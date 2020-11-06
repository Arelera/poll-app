import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';
import { getOne, voteOne } from '../services/pollService';
import Loader from './Loader';

const H2 = styled.h2`
  font-size: 1.75rem;
  color: #333;
  padding: 0.5rem 0;
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

const Date = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  color: #6a6a6a;
`;

const Poll = ({}) => {
  const [poll, setPoll] = useState();
  const [checkedChoice, setCheckedChoice] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const id = useParams().id;

  useEffect(() => {
    getOne(id).then((data) => {
      setPoll(data);
      setIsLoading(false);
      console.log(data);
    });
  }, []);

  const checkHandler = (choice) => {
    setCheckedChoice(choice);
  };

  const handleSubmit = (poll) => {
    const choices = [...JSON.parse(poll.choices)];
    choices.map((c, i) => {
      if (c[0] === checkedChoice) {
        choices[i][1]++;
      }
    });
    voteOne({ ...poll, choices }).then((p) => {
      history.push(`/polls/${poll.id}/results`);
    });
  };

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <H2>
            {poll.question} <Date>{poll.created_at.slice(0, 10)}</Date>{' '}
          </H2>
          <Ul>
            {JSON.parse(poll.choices).map(([choice], i) => (
              <Li key={i}>
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
              onClick={() => handleSubmit(poll)}
              size="large"
              primary={true}
            >
              Submit
            </Button>
            <div>
              <Button
                onClick={() => history.push(`/polls/${poll.id}/results`)}
                size="large"
              >
                Results
              </Button>
              <Button size="large">Copy link</Button>
            </div>
          </Buttons>
        </>
      )}
    </div>
  );
};

export default Poll;
