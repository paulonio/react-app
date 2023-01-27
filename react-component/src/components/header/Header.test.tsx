import React from 'react';
import { render, screen } from '@testing-library/react';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './header';

describe('Header', () => {
  it('renders header', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    );
    const headerLink = screen.getByText(/home/i);
    expect(headerLink).toBeInTheDocument();
  });
});
