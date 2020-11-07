import { Link } from 'react-router-dom';
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

const PollLi = ({ question, id }) => {
  return (
    <Li>
      {question && (
        <>
          <p>{question.question}</p>
          <Link to={`/polls/${id}`}>
            <Button primary={true}>Vote</Button>
          </Link>
        </>
      )}
    </Li>
  );
};

export default PollLi;
