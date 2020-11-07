import { render } from '@testing-library/react';
import Navbar from '../components/Navbar';

// NONE OF THE TESTS ARE WORKING CURRENTLY

describe('<Navbar />', () => {
  test('displays an h1 and a link tag properly', () => {
    const { getByText } = render(<Navbar />);
    getByText('POLLLO');
    getByText('Create Poll');
  });

  // test('clicking "Public Polls displays public polls"', () => {

  // })
});
