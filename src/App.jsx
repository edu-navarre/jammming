import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
// import Playlist from './components/Playlist/Playlist';
import './App.css';

function App() {
    const [searchResults, setSearchResults] = useState([]); // Centralized state

    return (
        <div>
            <h1>Jammming</h1>
            <SearchBar setSearchResults={setSearchResults} /> {/* Pass setter function */}
            <SearchResults searchResults={searchResults} /> {/* Pass searchResults */}
        </div>
    );
}

export default App;

