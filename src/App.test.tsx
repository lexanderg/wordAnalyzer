import React from 'react';
import { render, screen } from '@testing-library/react';
import WordAnalyzerApp from './WordAnalyzerApp';

test('renders learn react link', () => {
  render(<WordAnalyzerApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
