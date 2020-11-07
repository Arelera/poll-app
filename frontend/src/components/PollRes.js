import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { getOne } from '../services/pollService';
import Button from './Button';
import Loader from './Loader';

const Div = styled.div``;

const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;
  color: #333;
  padding: 0.5rem 0;
  border-bottom: 2px solid #9dd9d2;
`;

const Ul = styled.ul`
  padding: 0.5rem 0;
  width: 100%;
`;

const Li = styled.li`
  color: #333;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0.25rem;
  font-size: 1.25rem;
  display: flex;
  justify-content: space-between;

  :first-child > p {
    font-size: 2rem;
  }
  :nth-child(2) > p {
    font-size: 1.75rem;
  }
  :nth-child(3) > p {
    font-size: 1.5rem;
  }
  p > span {
    color: #6a6a6a;
    font-size: 1rem;
    /* vertical-align: top; */
  }
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

  const votesTotal =
    sortedChoices && sortedChoices.reduce((acc, [c, v]) => acc + v, 0);

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
                  <p>{choice}</p>
                  <p>
                    <span>{Math.round((votes / votesTotal) * 100) || 0}%</span>{' '}
                    {votes}
                  </p>
                </Li>
              ))}
            </Ul>
            <Button
              size="large"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
              }}
            >
              Copy link
            </Button>
          </>
        )
      )}
    </Div>
  );
};

export default PollRes;
