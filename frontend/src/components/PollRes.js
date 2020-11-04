import styled from 'styled-components';

const Div = styled.div``;

const H2 = styled.h2`
  font-size: 1.75rem;
  color: #333;
  padding: 0.5rem;
  border-bottom: 2px solid #9dd9d2;
`;

const Ul = styled.ul`
  padding: 0.5rem 0;
  width: 50%;
`;

const Li = styled.li`
  color: #333;
  border-bottom: 1px solid #ddd;
  padding: 0.5rem 0.25rem;
  font-size: 1.1rem;
`;

const PollRes = ({ poll }) => {
  const sortedChoices = poll.choices.sort((a, b) => b[1] - a[1]);

  return (
    <Div>
      <H2>{poll.question}</H2>
      <Ul>
        {sortedChoices.map(([choice, votes]) => (
          <Li>
            {choice} : {votes}
          </Li>
        ))}
        <p>some graph shit</p>
      </Ul>
    </Div>
  );
};

export default PollRes;
