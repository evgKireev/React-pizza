import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import './scss/app.scss';
import Header from './components/header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NoFound from './pages/NoFound';

function App() {
  const [searchInput, setSearchInput] = useState('');
  return (
    <div className="App">
      <div className="wrapper">
        <Header
          onInput={(e) =>
            setSearchInput(e.target.value.toLocaleLowerCase().trim())
          }
        />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchInput={searchInput} />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
