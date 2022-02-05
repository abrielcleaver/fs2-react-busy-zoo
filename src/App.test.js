import { render, screen } from '@testing-library/react';
import App from './App';

test('renders unicorn shrinking button text', () => {
  render(<App />);
  const unicornButtonText = screen.getByText(/unicorn is growing/i);
  expect(unicornButtonText).toBeInTheDocument();
});
