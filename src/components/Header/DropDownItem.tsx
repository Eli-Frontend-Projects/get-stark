// Import DropDownItemProps as a type
import * as React from 'react';
import './Header.scss';
import type {DropDownItemProps}  from './DropDownItemProps';

const DropDownItem: React.FC<DropDownItemProps> = ({ heading, description }) => {
    return (
        <div className="dropDownItem">
            <div className="dropDownHeading">{heading}</div>
            <div className="dropDownDescription">{description}</div>
        </div>
    );
}

export default DropDownItem;
