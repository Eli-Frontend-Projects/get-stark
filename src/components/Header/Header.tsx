import * as React from "react";
import './Header.css';
import './NavButton';
import NavButton from "./NavButton";
import type { DropDownItemProps } from './DropDownItemProps';
import DropDownItem from "./DropDownItem";
import { useCaseItems } from "./useCaseItemsDropdownData";
import DropDownItemImage from "./DropDownItemImage";
import ResourcesDropDown from "./ResourcesDropDown";

const Header: React.FC = () => {
    return (
        <ResourcesDropDown />
    );
};

export default Header;
