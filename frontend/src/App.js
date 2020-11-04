import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './components/Navbar';
import PollBox from './components/PollBox';
import PollList from './components/PollList';

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
        <Switch>
          {/* <Route path="/polls/:id/results">
            <PollBox polls={polls} />
          </Route> */}
          <Route path="/polls/:id">
            <PollBox polls={polls} />
          </Route>
          <Route path="/">
            <InnerDiv>
              <PollList polls={polls} />
            </InnerDiv>
          </Route>
        </Switch>
      </Div>
    </Router>
  );
}

const polls = [
  {
    question: 'Wadap peeposss',
    id: 1,
    choices: [
      'So what?',
      'Sure, I accept',
      'Dogs',
      'A long choice to see how it gonn be lookin on tha screen mah dudeeyy',
    ],
  },
  {
    question: 'Hey yoo?',
    id: 2,
  },
  {
    question: 'Alright, this is just some kinda long question placeholder?',
    id: 3,
  },
  { question: 'Wadap peeposss', id: 4 },
  { question: 'Hey yoo?', id: 5 },
  {
    question: 'Alright, this is just some kinda long question placeholder?',
    id: 6,
  },
];

export default App;
