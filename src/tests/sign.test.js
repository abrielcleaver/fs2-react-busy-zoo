import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders button', () => {
  render(<App />);

  const button = screen.getAllByRole('button');
  expect(button.length).toBe(10);
});