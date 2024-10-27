import * as React from 'react';
import './LibraryTile.scss';

interface LibraryTileProps {
  image_path: string;
  title: string;
  description: string;
}

const LibraryTile: React.FC<LibraryTileProps> = ({ image_path, title, description }) => {
  return (
    <div className="LibraryTileContainer">
        <div>
            <div className='LibraryImageDiv'>
                <img src={image_path} alt={`title {image}`} width="40px" height="40px"/>
            </div>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    </div>
  );
}

export default LibraryTile;
