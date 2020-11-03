import styled from 'styled-components';
import QuestionLi from './QuestionLi';

const Ul = styled.ul`
  min-height: 100%;
`;

const QuestionList = ({ questions }) => {
  return (
    <Ul>
      {questions.map((q) => (
        <QuestionLi question={q} />
      ))}
    </Ul>
  );
};

export default QuestionList;
