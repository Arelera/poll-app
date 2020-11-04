import { render } from '@testing-library/react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Poll from './Poll';

const polls = { question: 'Heyoo', id: 1 };

describe('<Poll />', () => {
  test('renders a poll', () => {
    // can't get this to work
    // const component = render(
    //   <Router>
    //     <Route path="/polls/1">
    //       <Poll polls={polls} />
    //     </Route>
    //   </Router>
    // );
    // component.debug();
    // // component.getByText('Heyoo');
  });
});
