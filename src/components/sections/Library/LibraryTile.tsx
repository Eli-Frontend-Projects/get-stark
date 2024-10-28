import * as React from 'react';
import './LibraryTile.scss';

interface LibraryTileProps {
  image_path: string;
  title: string;
  description: string;
  expandAtBreakpoint?: boolean;
}

const LibraryTile: React.FC<LibraryTileProps> = ({ image_path, title, description, expandAtBreakpoint = true }) => {
  return (
    <div className={`LibraryTileContainer ${expandAtBreakpoint ? 'library-tile-bp-expand' : ''}`}>
        <div>
            <div className='LibraryImageDiv'>
                <img src={image_path} alt={`title ${title}`} width="40px" height="40px"/>
            </div>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    </div>
  );
}

export default LibraryTile;
