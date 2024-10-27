import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import './Header.scss';

interface NavButtonProps {
  button_name: string;
  drop_down_component?: React.FC;
}

const NavButton: React.FC<NavButtonProps> = ({ button_name, drop_down_component: DropDownComponent }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    if (DropDownComponent) {
      setIsDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (DropDownComponent) {
      setIsDropdownOpen(false);
    }
  };

  return (
    <div 
      className="header-button-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="header-button">
        {button_name}
        {DropDownComponent && (
          <ChevronDown className={`dropdown-arrow alignBaseline ${isDropdownOpen ? 'rotate' : ''}`} />
        )}
      </div>
      {isDropdownOpen && DropDownComponent && (
        <div className="dropDownComponent">
          <DropDownComponent />
        </div>
      )}
    </div>
  );
};

export default NavButton;
