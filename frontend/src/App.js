import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PollBox from './components/PollBox';

import { getAll } from './services/pollService';

const Div = styled.div`
  min-height: 100vh;
  background: #fafafa;
`;

function App() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    getAll().then((p) => {
      setPolls(p);
    });
  }, []);

  return (
    <Router>
      <Div>
        <Navbar />
        <Switch>
          {/* i think i can juts cover everything in a pollbox here, i'll fix it later */}
          <Route path="/polls/:id/results">
            <PollBox type="res" />
          </Route>
          <Route path="/polls/:id">
            <PollBox type="poll" />
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

export default App;
