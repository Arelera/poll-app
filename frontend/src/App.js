import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Poll from './components/Poll';
import PollBox from './components/PollBox';
import PollForm from './components/PollForm';
import PollList from './components/PollList';
import PollRes from './components/PollRes';

const CoverDiv = styled.div`
  height: 100%;
  width: 100%;
  background: #fafafa;
`;

const Div = styled.div`
  min-height: 100vh;
  width: 60%;
  margin: auto;
  background: #fafafa;
  @media screen and (max-width: 1024px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    width: 99%;
  }
`;

function App() {
  return (
    <Router>
      <CoverDiv>
        <Div>
          <Navbar />
          <PollBox>
            <Switch>
              <Route exact path="/polls/:id/results" component={PollRes} />

              <Route exact path="/polls/:id" component={Poll} />

              <Route exact path="/create-poll" component={PollForm} />
              <Route exact path="/" component={PollList} />
              <Route>
                <Redirect to="/" />
              </Route>
            </Switch>
          </PollBox>
          <Footer />
        </Div>
      </CoverDiv>
    </Router>
  );
}

export default App;
