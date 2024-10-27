import * as React from 'react';
import './SearchBar.scss'

const SearchBar: React.FC = () => {
    return (
        <div className='searchBarContainer setFullWidth'>
            <div className='centerImage'>
                <img
                    src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                    alt="search icon"
                    width="30px"
                    height="30px"
                />
            </div>
            <input className='setFullWidth' />
        </div>
    );
}

export default SearchBar;