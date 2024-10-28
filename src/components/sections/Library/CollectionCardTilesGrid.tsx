import * as React from 'react';
import CollectionCard from './CollectionCard';
import './LibraryTilesPanel.scss';

const CollectionCardTilesGrid: React.FC = () => {
    return (
        <div className='tiles-grid'>
            <CollectionCard imagePath="collection1.png" cardText="Disability Employment"/>
            <CollectionCard 
            imagePath="collection2.png" 
            cardText="Making Accessible Color Combos" 
            backgroundColor="var(--theme-color-light)"
            />
            <CollectionCard imagePath="collection3.png" cardText="Tips and Tricks for Inclusive Social Media"/>
        </div>
    )
}

export default CollectionCardTilesGrid;
