import * as React from 'react';
import "./CollectionCard.scss";

interface CollectionCardProps {
    imagePath: string;
    cardText: string;
    backgroundColor?: string;
}

const CollectionCard: React.FC<CollectionCardProps> = ({ imagePath, cardText, backgroundColor }) => {
    return (
        <div className='CollectionCard' style={{ backgroundColor }}>
            <img src={imagePath} alt={cardText} width="var(--tile-width)" />
            <p>{cardText}</p>
        </div>
    );
}

export default CollectionCard;
