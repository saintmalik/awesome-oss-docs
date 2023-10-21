import React, { useState } from 'react';
import SearchIcon from './imgs/search.svg';

const App = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

//   const handleSearch = () => {
//     // Implement your search logic here
//     console.log(`Searching for "${searchText}" with filter "${selectedFilter}"`);
//   };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '50px', maxWidth: '100%' }}>
      {/* Search Bar */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', borderRadius: '7px', border: '1px solid #000', padding: '7px' }}>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
          {searchText === '' && (
            <img
              src={SearchIcon}
              alt="Search"
              style={{ width: '15px', marginRight: '5px' }}
            />
          )}
          <input
            type="text"
            className="form-control"
            placeholder={searchText ? '' : 'Search'}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            style={{ flex: 1, border: 'none', outline: 'none' }}
          />
        </div>
      </div>

      {/* Filter Bar */}
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', borderRadius: '7px', border: '1px solid #000', padding: '7px' }}>
        <select
          className="form-select"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          style={{ flex: 1, border: 'none', outline: 'none', marginLeft: 'auto', color: '#A9A9A9'}}
        >
          <option value="all">Filter</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
};

export default App;
