import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import App from './App';

test('renders the polo match experience with a production-style dashboard', () => {
  render(<App />);

  expect(screen.getByText(/royal polo studio/i)).toBeInTheDocument();
  expect(screen.getByText(/architecture sketch/i)).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /record goal/i })).toBeInTheDocument();
});

test('lets players switch field zones and record a goal', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole('button', { name: /penalty 60/i }));
  expect(screen.getByRole('button', { name: /penalty 60/i })).toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: /record goal/i }));
  expect(screen.getByText(/goal!/i)).toBeInTheDocument();
});

test('starts the match and logs a live play event', async () => {
  const user = userEvent.setup();
  render(<App />);

  await user.click(screen.getByRole('button', { name: /start match/i }));
  await user.click(screen.getByRole('button', { name: /drive/i }));

  expect(screen.getAllByText(/match live/i).length).toBeGreaterThan(0);
  expect(screen.getByText(/drive • royal/i)).toBeInTheDocument();
});
