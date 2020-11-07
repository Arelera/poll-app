import { render } from '@testing-library/react';
import PollLi from '../components/PollLi';

const question = { question: 'Yo wadap?', id: 2 };

describe('<PollLi />', () => {
  test('renders a question', () => {
    const { getByText } = render(<PollLi question={question} />);
    getByText('Yo wadap?');
  });
});
