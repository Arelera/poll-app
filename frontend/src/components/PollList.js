import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import PollLi from './PollLi';

const Ul = styled.ul`
  min-height: 100%;
`;

const PollList = ({ polls }) => {
  const history = useHistory();

  const clickHandlerVote = (id) => {
    console.log('Clicked');
    history.push(`/polls/${id}`);
  };

  return (
    <Ul>
      {polls.map((p) => (
        <PollLi
          key={p.id}
          clickHandlerVote={() => clickHandlerVote(p.id)}
          question={p}
        />
      ))}
    </Ul>
  );
};

export default PollList;
