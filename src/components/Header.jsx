import React from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <nav>
      <Link to="/">X CRYPTO</Link>
      <div>
        <Link to="/">Home</Link>
        <Link to="/exchanges">Exchanges</Link>
        <Link to="/coins">Coins</Link>
      </div>
    </nav>
  );
};

export default Header;
