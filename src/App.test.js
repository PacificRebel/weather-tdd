import { render, screen } from '@testing-library/react';
import App from './App';

test('displays Weather app title', () => {
  render(<App />);
  const linkElement = screen.getByText("Weather app");
  expect(linkElement).toBeInTheDocument();
});
