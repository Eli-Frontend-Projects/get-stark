import * as React from 'react';
import LibraryTile from './LibraryTile';
import './LibraryTilesPanel.scss';

interface LibraryTilesPanelProps {
  title: string;
  description: string;
  GridPanel: React.ReactNode; 
}

const LibraryTilesPanel: React.FC<LibraryTilesPanelProps> = ({ title, description, GridPanel }) => {
  const viewAllText = 'VIEW ALL';

  return (
    <div className='library-tiles-panel'>
      <div className='panel-header'>
        <p className='panel-title'>{title}</p>
        <p className='view-all'>{viewAllText}</p>
      </div>
      <p className='panel-description'>{description}</p>

      {GridPanel}
    </div>
  );
}

export default LibraryTilesPanel;
