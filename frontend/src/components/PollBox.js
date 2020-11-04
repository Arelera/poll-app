import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Poll from './Poll';

const Div = styled.div`
  min-height: 600px;
  padding: 0.5rem 2rem;
  margin: 0rem 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;

  box-shadow: 0px 2px 5px #ccc;
  background: #fff;
`;

const PollBox = ({ polls }) => {
  const id = useParams().id;
  const poll = polls.find((p) => Number(id) === p.id);

  return (
    <Div>
      <Poll poll={poll} />
    </Div>
  );
};

export default PollBox;
