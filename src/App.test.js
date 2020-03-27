import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders simple example', () => {
  window.HTMLElement.prototype.scrollIntoView = jest.fn()
  const { getByText } = render(
      <App />
  );

  expect(getByText(/Send/i)).toBeInTheDocument();
});
