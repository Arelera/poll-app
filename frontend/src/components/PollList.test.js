import { render } from '@testing-library/react';
import PollList from './PollList';

const questions = [
  { question: 'Wadap peeposss', id: 1 },
  { question: 'Hey yoo?', id: 2 },
  {
    question: 'Alright, this is just some kinda long question placeholder?',
    id: 3,
  },
];

describe('<PollList />', () => {
  test('renders questions', () => {
    const { getByText } = render(<PollList questions={questions} />);
    getByText('Wadap peeposss');
    getByText('Hey yoo?');
    getByText('Alright, this is just some kinda long question placeholder?');
  });
});
