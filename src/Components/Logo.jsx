import React from 'react';
import './Logo.css';

const Logo = () => {
  const logoImage = 'https://assets-global.website-files.com/61e0a7ab0e57e953835f3aeb/61e0d883c39341e91e57499b_icon-home-qrcode-template.svg';

  return (
    <div className="logo">
      <img src={logoImage} alt="Restaurant logo" />
    </div>
  );
};

export default Logo;