import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getOne } from '../services/pollService';
import Loader from './Loader';

const Div = styled.div``;

const H2 = styled.h2`
  font-size: 1.75rem;
  color: #333;
  padding: 0.5rem 0;
  border-bottom: 2px solid #9dd9d2;
`;

const Ul = styled.ul`
  padding: 0.5rem 0;
  width: 50%;
`;

const Li = styled.li`
  color: #333;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0.25rem;
  font-size: 1.1rem;
`;

const Date = styled.span`
  font-size: 0.8rem;
  font-weight: 400;
  color: #6a6a6a;
`;

const PollRes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [poll, setPoll] = useState();
  const id = useParams().id;

  useEffect(() => {
    getOne(id).then((res) => {
      setPoll(res);
      setIsLoading(false);
    });
  }, [id]);

  const sortedChoices =
    poll && JSON.parse(poll.choices).sort((a, b) => b[1] - a[1]);

  return (
    <Div>
      {isLoading ? (
        <Loader />
      ) : (
        poll && (
          <>
            <H2>
              {poll.question} <Date>{poll.created_at.slice(0, 10)}</Date>
            </H2>
            <Ul>
              {sortedChoices.map(([choice, votes], i) => (
                <Li key={i}>
                  {choice} : {votes}
                </Li>
              ))}
              <p>some graph shit</p>
            </Ul>
          </>
        )
      )}
    </Div>
  );
};

export default PollRes;
