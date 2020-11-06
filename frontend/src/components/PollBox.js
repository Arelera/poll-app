import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import Poll from './Poll';
import PollForm from './PollForm';
import PollList from './PollList';
import PollRes from './PollRes';

import { getOne } from '../services/pollService';
import { useState } from 'react';
import Loader from './Loader';

const Div = styled.div`
  max-width: 100%;
  padding: 0.5rem 2rem;
  margin: 0rem 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;

  box-shadow: 0px 2px 5px #ccc;
  background: #fff;
`;

const PollBox = ({ polls, type }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [poll, setPoll] = useState();
  const location = useLocation(); // checking if route is create-poll, to setIsLoading false
  const id = useParams().id;

  useState(() => {
    // this part kinda displays the bad design of the PollBox component
    id &&
      getOne(id).then((res) => {
        setPoll(res);
        setIsLoading(false);
      });
    polls || (location.pathname === '/create-poll' && setIsLoading(false));
    setIsLoading(false); // tis a bad idea, fix later
  }, []);

  let elToRender;

  switch (type) {
    case 'form':
      elToRender = <PollForm />;
      break;
    case 'res':
      elToRender = <PollRes poll={poll} />;
      break;
    case 'poll':
      elToRender = <Poll poll={poll} />;
      break;
    default:
      elToRender = <PollList polls={polls} />;
  }

  return <Div>{isLoading ? <Loader /> : elToRender}</Div>;
};

export default PollBox;
