import styled from 'styled-components';
import Button from './Button';

const Li = styled.li`
  border-bottom: 1px solid #ddd;
  padding: 0.5rem;
  color: #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 1.25rem;
    font-weight: 500;
  }
  :last-child {
    border-bottom: none;
  }
  :hover {
    background: #fafafa;
  }
`;

const PollLi = ({ question, clickHandlerVote }) => {
  return (
    <Li>
      <p>{question.question}</p>
      {/* clicking this should go to a seperate link with questions url */}
      <Button onClick={clickHandlerVote} primary={true}>
        Vote
      </Button>
    </Li>
  );
};

export default PollLi;
