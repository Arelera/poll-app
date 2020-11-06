import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PollLi from './PollLi';

import { getAll } from '../services/pollService';
import Loader from './Loader';

const Ul = styled.ul`
  min-height: 100%;
`;

const PollList = ({}) => {
  const history = useHistory();
  const [isLoading, setIsLoading] = useState(true);
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    getAll().then((data) => {
      setPolls(data);
      setIsLoading(false);
    });
  }, []);

  const clickHandlerVote = (id) => {
    history.push(`/polls/${id}`);
  };

  return (
    <Ul>
      {isLoading ? (
        <Loader />
      ) : (
        polls.map((p) => (
          <PollLi
            key={p.id}
            clickHandlerVote={() => clickHandlerVote(p.id)}
            question={p}
          />
        ))
      )}
    </Ul>
  );
};

export default PollList;
