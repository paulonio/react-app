import React from 'react';
import { render, screen } from '@testing-library/react';
import ErrorContent from './ErrorContent';

describe('Error content', () => {
  it('renders error container', () => {
    render(<ErrorContent />);
    const containerTitle = screen.getByText(/404/i);
    expect(containerTitle).toBeInTheDocument();
  });
});
