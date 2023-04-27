import { render, screen } from '@testing-library/react';
import SamuraiJsApp from './App';
import React from 'react';
import ReactDOM from 'react-dom';

test('renders learn react link', () => {
  render(<SamuraiJsApp />);
  const div = screen.getByRole(/main/i) 
  expect(div).toBeInTheDocument();
});
