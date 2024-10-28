import * as React from "react";
import LibraryTilesPanel from "./LibraryTilesPanel"
import NewInLibraryTilesGrid from './NewInLibraryTilesGrid';
import { Grid } from "lucide-react";

const NewInLibraryValues = {
  title: 'New in the Library',
  description: 'Newly added accessibility resources, guides, and more.',
  GridPanel : <NewInLibraryTilesGrid/>
};

const Library: React.FC = () => {
    return (
        <div style={{ boxSizing: "border-box", flexGrow:1 }}>
            <LibraryTilesPanel {...NewInLibraryValues}/>
        </div>
    );
}

export default Library;
