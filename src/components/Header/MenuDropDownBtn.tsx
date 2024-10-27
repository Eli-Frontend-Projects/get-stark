import * as React from 'react';
import { useState } from 'react';
import './MenuDropDownBtn.scss';

interface MenuDropDownBtnProps {
    MenuDropDown: React.FC;
}

const MenuDropDownBtn: React.FC<MenuDropDownBtnProps> = ({MenuDropDown}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="menu-btn"
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                {isOpen ? (
                    // Close (X) icon
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M18 6L6 18M6 6L18 18" 
                            stroke="#4339F2" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                ) : (
                    // Hamburger menu icon
                    <svg 
                        width="24" 
                        height="24" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path 
                            d="M4 6H20M4 12H20M4 18H20" 
                            stroke="#4339F2" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                        />
                    </svg>
                )}
            </button>
            {isOpen && <MenuDropDown />}
        </div>
    );
}

export default MenuDropDownBtn;