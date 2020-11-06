import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Div = styled.div`
  font-size: 6rem;
  text-align: center;
  color: #ff8811;
  line-height: 1.2;
  padding: 1rem;
  h3 {
    font-size: 3rem;
    color: #ff8811;
  }

  ion-icon {
    animation: ${rotate} 1s linear infinite;
  }
`;

const Loader = () => {
  return (
    <Div>
      <ion-icon name="reload-circle"></ion-icon>
      <h3>Loading</h3>
    </Div>
  );
};

export default Loader;
