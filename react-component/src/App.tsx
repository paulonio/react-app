import React, { useReducer } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from 'pages/home-page';
import About from 'pages/about-page';
import Error from 'pages/error-page';
import Form from 'pages/form-page';
import Character from 'components/content/character/Character';
import { initialState, mainReducer, SearchContext } from 'context/context';

function App() {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <SearchContext.Provider value={{ state, dispatch }}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters/:id" element={<Character />} />
          <Route path="/about" element={<About />} />
          <Route path="/form" element={<Form />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </HashRouter>
    </SearchContext.Provider>
  );
}

export default App;
