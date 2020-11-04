import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PollBox from './components/PollBox';

const Div = styled.div`
  min-height: 100vh;
  background: #fafafa;
`;

function App() {
  return (
    <Router>
      <Div>
        <Navbar />
        <Switch>
          {/* i think i can juts cover everything in a pollbox here, i'll fix it later */}
          <Route path="/polls/:id/results">
            <PollBox polls={polls} type="res" />
          </Route>
          <Route path="/polls/:id">
            <PollBox polls={polls} type="poll" />
          </Route>
          <Route path="/create-poll">
            <PollBox type="form" />
          </Route>
          <Route path="/">
            <PollBox polls={polls} />
          </Route>
        </Switch>
        <Footer />
      </Div>
    </Router>
  );
}

const polls = [
  {
    question: 'Wadap peeposss Wadap peeposss Wadap?',
    id: 1,
    choices: [
      ['So what?', 8],
      ['Sure, I accept', 4],
      ['Dogs', 14],
      [
        'A long choice to see how it gonn be lookin on tha screen mah dudeeyy',
        2,
      ],
    ],
    created_at: '2020-11-04',
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
