import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  return (
    <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto px-4 md:px-8">
      {/* Search Bar */}
      <div className="flex flex-1 items-center bg-white-500 rounded-lg border border-gray-500 p-2">
        <div className="relative flex items-center w-full">
          <input
            type="text"
            className="flex flex-grow outline-none border-none bg-white-500" 
            placeholder={'🔍Search'}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-1 items-center bg-white-500 rounded-lg border border-gray-500 p-2">
        <select
          className="w-full outline-none border-none text-white-500"
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
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

export default SearchFilter;
