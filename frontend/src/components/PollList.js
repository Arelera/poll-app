import { useEffect, useState } from 'react';
import styled from 'styled-components';
import PollLi from './PollLi';

import { getAll } from '../services/pollService';
import Loader from './Loader';

const Ul = styled.ul`
  min-height: 100%;
`;

const PollList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    getAll().then((data) => {
      setPolls(data);
      setIsLoading(false);
    });
  }, []);

  return (
    <Ul>
      {isLoading ? (
        <Loader />
      ) : (
        polls.map((p) => <PollLi key={p.id} question={p} id={p.id} />)
      )}
    </Ul>
  );
};

export default PollList;
