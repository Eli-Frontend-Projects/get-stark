import React from 'react';
import './HeaderLogoButton.scss';

const HeaderLogoButton: React.FC = () => {
  return (
    <button className="header-logo-button">
      <img
        src="/header_button_logo.svg"
        alt="Header Button Logo"
        className="header-logo"
      />
    </button>
  );
};

export default HeaderLogoButton;
