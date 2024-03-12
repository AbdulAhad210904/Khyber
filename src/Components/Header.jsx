import React from 'react';
import './Header.css';
import Logo from './Logo'; // Import the Logo component

const Header = () => {
  const headerImage = 'https://assets-global.website-files.com/61e0a7ab0e57e953835f3aeb/61e0d026cf8084cdb6cd1e27_image-cover-home-qrcode-template-p-800.jpeg';

  return (
    <header className="header">
      <img className="header__image" src={headerImage} alt="Restaurant landscape photo" />
      <Logo className="header__logo" style={{ marginTop: '1%' }} /> {/* Add margin below image */}
    </header>
  );
};

export default Header;
