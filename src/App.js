import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';
import Header from './components/header/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import NoFound from './pages/NoFound';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NoFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
