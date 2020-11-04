import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Poll from './Poll';
import PollForm from './PollForm';
import PollList from './PollList';
import PollRes from './PollRes';

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
  // type -> res, poll, form
  const id = useParams().id;
  // const poll = polls.find((p) => Number(id) === p.id);

  let elToRender;

  switch (type) {
    case 'form':
      elToRender = <PollForm />;
      break;
    case 'res':
      elToRender = <PollRes poll={polls.find((p) => Number(id) === p.id)} />;
      break;
    case 'poll':
      elToRender = <Poll poll={polls.find((p) => Number(id) === p.id)} />;
      break;
    default:
      elToRender = <PollList polls={polls} />;
  }

  return <Div>{elToRender}</Div>;
};

export default PollBox;
