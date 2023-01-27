import React from 'react';
import { render, screen } from '@testing-library/react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import About from './about-page';
import Home from './home-page';
import Error from './error-page';

describe('Pages render', () => {
  it('renders about page', async () => {
    render(
      <HashRouter>
        <Routes>
          <Route path="/" element={<About />} />
        </Routes>
      </HashRouter>
    );
    const containerTitle = screen.getByRole('heading');
    expect(containerTitle).toBeInTheDocument();
  });

  it('renders home container', async () => {
    render(
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
    );
    const containerTitle = screen.getByText(/characters/i);
    expect(containerTitle).toBeInTheDocument();
  });

  it('renders error container', async () => {
    render(
      <HashRouter>
        <Routes>
          <Route path="/" element={<Error />} />
        </Routes>
      </HashRouter>
    );
    const containerTitle = screen.getByText(/404/i);
    expect(containerTitle).toBeInTheDocument();
  });
});
