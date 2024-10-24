import * as React from 'react';
import './Header.css';

type DropDownItemImageProps = {
    imagePath: string;
    heading: string;
    description: string;
    descriptionIsURL?: boolean;
    imageSize?: { width: string, height: string };
};

const DropDownItemImage: React.FC<DropDownItemImageProps> = ({ 
    imagePath, 
    heading, 
    description, 
    descriptionIsURL = false, 
    imageSize = { width: '80px', height: '80px' }
}) => {
    return (
        <div className='spanAllRows lastRowFirstCol dropDownItemImage'>
            <div className='centerHorizontally'>
                <img 
                    src={imagePath} 
                    alt={heading} 
                    width={imageSize.width} 
                    height={imageSize.height}
                />
            </div>
            <div>
                <p>{heading}</p>
                <p className={descriptionIsURL ? "url" : ""}>{description}</p>
            </div>
        </div>
    );
};

export default DropDownItemImage;
