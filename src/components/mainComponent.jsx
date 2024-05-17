import React, { useState } from 'react';
import SearchBar from './searchBar';

const MainComponent = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (term) => {
    const response = await fetch(`http://localhost:8000/search?term=${term}`);
    const data = await response.json();
    setSearchResults(data);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>
            <h3>{result.marque}</h3>
            <p>{result.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MainComponent;