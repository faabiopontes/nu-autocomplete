import { render, screen } from '@testing-library/react';
import App from './App';

test('renders autocomplete', () => {
  render(<App />);
  const autocompleteElement = screen.getByText(/Autocomplete/i);
  expect(autocompleteElement).toBeInTheDocument();
});
