import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

import './scss/app.scss';
import Header from './components/header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NoFound from './pages/NoFound';

export const SearchContext = React.createContext();

function App() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div className="App">
      <div className="wrapper">
        <SearchContext.Provider value={{ searchInput, setSearchInput }}>
          <Header />
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NoFound />} />
            </Routes>
          </div>
        </SearchContext.Provider>
      </div>
    </div>
  );
}

export default App;
