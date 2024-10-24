import * as React from 'react'
import './Header.css';
import { useCaseItems } from "./useCaseItemsDropdownData";
import DropDownItem from "./DropDownItem";
import DropDownItemImage from "./DropDownItemImage";

const UseCaseDropDown : React.FC = ()=>{
    return (
        <div className="useCaseContainer">
            {useCaseItems.map((item, index) => (
                <DropDownItem key={index} {...item} />
            ))}
            
            <DropDownItemImage
                imagePath="./white-paper-callout.webp" 
                heading="Read our new white paper" 
                description="Managing a modern accessibility posture and growing accessibility maturity at any scale."
            />

        </div>
    );

}

export default UseCaseDropDown;