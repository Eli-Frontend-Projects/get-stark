import * as React from 'react';
import SearchBar from './SearchBar';
import './Sidebar.scss';
import { ChevronDown } from 'lucide-react';

const Sidebar: React.FC = () => {
    return (
        <div className='Sidebar'>
            <p className='appearGreaterThanBreakpoint'>Search Library</p>
            <div className='flipOrderOnBreakpoint'>
                <SearchBar />
                <div className='SidebarMenuCollection'>
                        <p className="LibraryBtn">Library</p>
                        <p className='HomeBtn'>Home</p>
                        <p>Collections</p>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <p>Categories</p>
                            <ChevronDown /> 
                    </div>
                </div>
                    <div className='StarkContributionContainer'>
                        <p>Contribute to Stark</p>
                        <p>Got any accessibility resources or news?</p>

                        <div>
                            Submit a resource
                        </div>
                    </div>
            </div>
        </div>
    );
}

export default Sidebar;
