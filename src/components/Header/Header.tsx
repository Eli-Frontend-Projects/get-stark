import * as React from "react"
import './Header.scss'
import './NavButton'
import NavButton from "./NavButton"
import StartFreeTrialBtn from "./StartFreeTrialBtn";
import HeaderLogoButton from "./HeaderLogoButton";
import UseCaseDropDown from "./UseCaseDropDown";
import ResourcesDropDown from "./ResourcesDropDown";
import MenuDropDown from "./MenuDropDown";
import MenuDropDownBtn from "./MenuDropDownBtn";

const Header : React.FC = ()=>{
    return  (
        <header>
            <div className="headerContainer">
                <div className="headerButtonContainer">
                <HeaderLogoButton/>
                <NavButton button_name="Use cases" drop_down_component={UseCaseDropDown}/>
                <NavButton button_name="Pricing"/>
                <NavButton button_name="Support"/>
                <NavButton button_name="Resources" drop_down_component={ResourcesDropDown}/>
                </div>

                <div className="headerButtonContainer">
                    <NavButton button_name="Log in"/>
                    <StartFreeTrialBtn/>
                    <MenuDropDownBtn  MenuDropDown={MenuDropDown}/>
                </div>

            </div>
        </header>
    )
}

export default Header;