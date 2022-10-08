import { Routes, Route } from 'react-router-dom';
import React from 'react';

import './scss/app.scss';
import Header from './components/header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NoFound from './pages/NoFound';
import OnePizzaBlock from './pages/OnePizzaBlock';
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/React-pizza" element={<Home />} />
            <Route path="React-pizza/cart" element={<Cart />} />
            <Route path="*" element={<NoFound />} />
            <Route path="React-pizza/pizza/:id" element={<OnePizzaBlock />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
