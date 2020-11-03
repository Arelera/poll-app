import { BrowserRouter as Router } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import QuestionList from './components/QuestionList';

const Div = styled.div`
  min-height: 100vh;
  background: #fafafa;
`;

const InnerDiv = styled.div`
  padding: 1rem;
  min-height: 100%; /* not working for some reason??? */
  margin: 1rem 2rem;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 2px 5px #ccc;
  background: #fff;
`;

function App() {
  return (
    <Router>
      <Div>
        <Navbar />
        <InnerDiv>
          <QuestionList
            questions={[
              { question: 'Wadap peeposss' },
              { question: 'Hey yoo?' },
              {
                question:
                  'Alright, this is just some kinda long question placeholder?',
              },
              { question: 'Wadap peeposss' },
              { question: 'Hey yoo?' },
              {
                question:
                  'Alright, this is just some kinda long question placeholder?',
              },
            ]}
          />
        </InnerDiv>
      </Div>
    </Router>
  );
}

export default App;
