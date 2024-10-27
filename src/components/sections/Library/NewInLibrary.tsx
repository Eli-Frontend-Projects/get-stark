import * as React from 'react';
import LibraryTile from './LibraryTile';

const NewInLibrary: React.FC = () => {
  return (
    <div>
        <div style={{display: "flex", justifyContent:"space-between"}}>
            <p>New in the Library</p>
            <a href="#">VIEW ALL</a>
        </div>
        <p>Newly added accessibility resources, guides, and more.</p>

        <div>
            <LibraryTile image_path='daisy.jpg' title='Resources' description='Inclusive Publishing'/>
            <LibraryTile image_path='daisy.jpg' title='Resources' description='The APLN (Accessible Publishing Learning Network) '/>
            <LibraryTile image_path='daisy.jpg' title='Resources' description='Making Accessible Books'/>
            <LibraryTile image_path='daisy.jpg' title='Resources' description="The DAISY Consortium's Accessible Publishing Knowledge Base"/>
            <LibraryTile image_path='daisy.jpg' title='Resources' description='Language, Please: Style Guide & Resource for journalists and storytellers'/>
            <LibraryTile image_path='daisy.jpg' title='Blogs & Articles' description='4 steps to more inclusive, precise language'/>
        </div>
    </div>
  );
}

export default NewInLibrary;
