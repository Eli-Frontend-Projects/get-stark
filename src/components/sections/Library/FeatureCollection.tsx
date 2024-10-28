import * as React from "react";
import LibraryTilesPanel from "./LibraryTilesPanel"
import CollectionCardTilesGrid from "./CollectionCardTilesGrid";

const FeatureCollectionValues = {
  title: 'Featured Collections',
  description: 'Handpicked and curated collections around accessibility.',
  GridPanel : <CollectionCardTilesGrid/>
};

const FeatureCollection: React.FC = () => {
    return (
        <div style={{ boxSizing: "border-box", flexGrow:1 }}>
            <LibraryTilesPanel {...FeatureCollectionValues}/>
        </div>
    );
}

export default FeatureCollection;
