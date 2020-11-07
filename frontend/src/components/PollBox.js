import styled from 'styled-components';

const Div = styled.div`
  max-width: 100%;
  padding: 0.5rem 2rem;
  margin: 0rem 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 2px 5px #ccc;
  background: #fff;

  @media screen and (max-width: 1024px) {
    margin: 0 0.5rem;
  }
  @media screen and (max-width: 425px) {
    margin: 0 0.25rem;
    padding: 0.5rem 0.75rem;
  }
`;

const PollBox = ({ children }) => {
  return <Div>{children}</Div>;
};

export default PollBox;
