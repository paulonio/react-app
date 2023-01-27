import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutContent from './AboutContent';

describe('About content', () => {
  it('renders about container', () => {
    render(<AboutContent />);
    const containerTitle = screen.getByText(/about/i);
    expect(containerTitle).toBeInTheDocument();
  });
});
