import * as React from 'react'
import './Header.css';
import resourceItemsData  from "./resourcesItemsDropdownData";
import DropDownItem from "./DropDownItem";
import DropDownItemImage from "./DropDownItemImage";

const ResourcesDropDown : React.FC = ()=>{
    return (
        <div className='resourcesDropDownContainer'>
            <DropDownItemImage
                imagePath="./medium_New_pricing.webp" 
                heading="Introducing the next generation Stark platform and free starter plan for teams" 
                description="Read more on the blog"
                descriptionIsURL={true}
                imageSize={{width:"100%", height:"100%"}}
            />

            {resourceItemsData.map((item, index) => (
                <DropDownItem key={index} {...item} />
            ))}
            
            {/* <DropDownItemImage
                imagePath="./white-paper-callout.webp" 
                heading="Read our new white paper" 
                description="Managing a modern accessibility posture and growing accessibility maturity at any scale."
            /> */}

        </div>
    );

}

export default ResourcesDropDown;