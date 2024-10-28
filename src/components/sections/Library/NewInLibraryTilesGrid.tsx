import * as React from 'react';
import LibraryTile from './LibraryTile';

interface NewInLibraryTilesGridProps {
  expandAtBreakpoint?: boolean;
}

const NewInLibraryTilesGrid: React.FC<NewInLibraryTilesGridProps> = ({ expandAtBreakpoint = true }) => {
  return (
    <div className={`tiles-grid ${expandAtBreakpoint ? 'tiles-grid-bp-expand' : ''}`}>
        <LibraryTile image_path='daisy.jpg' title='Resources' description='Inclusive Publishing'/>
        <LibraryTile image_path='APLN.png' title='Resources' description='The APLN (Accessible Publishing Learning Network)'/>
        <LibraryTile image_path='resources.jpg' title='Resources' description='Making Accessible Books'/>
        <LibraryTile image_path='daisy.jpg' title='Resources' description="The DAISY Consortium's Accessible Publishing Knowledge Base"/>
        <LibraryTile image_path='language_please.png' title='Resources' description='Language, Please: Style Guide & Resource for journalists and storytellers'/>
        <LibraryTile image_path='google.png' title='Blogs & Articles' description='4 steps to more inclusive, precise language'/>
    </div>
  );
}

export default NewInLibraryTilesGrid;
