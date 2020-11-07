import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PollBox from '../components/PollBox';

const polls = [{ question: 'Heyoo', id: 1 }];

describe('<Poll />', () => {
  test('renders a poll', () => {
    const component = render(
      <Router>
        <Route path="/polls/1">
          <PollBox polls={polls} />
        </Route>
      </Router>
    );

    component.getByText('Heyoo');
  });
});
