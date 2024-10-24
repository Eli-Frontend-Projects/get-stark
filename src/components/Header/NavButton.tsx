import * as React from "react";
import './Header.css'

interface NavButtonProps{
    button_name: string,
    drop_down_component?: React.FC    
}

const NavButton: React.FC <NavButtonProps> = ({button_name, drop_down_component}) => {
    return (
    <div className="header-button">{button_name}</div>
    )
}

export default NavButton;