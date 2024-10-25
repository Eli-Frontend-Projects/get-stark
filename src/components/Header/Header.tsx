import * as React from "react"
import './Header.css'
import './NavButton'
import NavButton from "./NavButton"
import type {DropDownItemProps}  from './DropDownItemProps';
import StartFreeTrialBtn from "./StartFreeTrialBtn";
import HeaderLogoButton from "./HeaderLogoButton";
import UseCaseDropDown from "./UseCaseDropDown";
import ResourcesDropDown from "./ResourcesDropDown";

const Header : React.FC = ()=>{
    return  (
        <header>
            <div style={{"display": "flex", "justifyContent": "space-around"}}>
                <div className="beginHeaderButtonContainer">
                <HeaderLogoButton/>
                <NavButton button_name="Use cases" drop_down_component={UseCaseDropDown}/>
                <NavButton button_name="Pricing"/>
                <NavButton button_name="Support"/>
                <NavButton button_name="Resources" drop_down_component={ResourcesDropDown}/>
                </div>

                <div className="endHeaderButtonContainer">
                    <NavButton button_name="Log in"/>
                    <StartFreeTrialBtn/>
                </div>

            </div>
        </header>
    )
}

export default Header;