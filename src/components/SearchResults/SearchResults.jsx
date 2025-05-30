import React from 'react';
import styles from './SearchResults.module.css'
import Tracklist from '../Tracklist/Tracklist';

function SearchResults({ searchResults, addTrack }) {
    return (
        <div>
            <h2>Search Results</h2>
            <Tracklist tracks={searchResults} addTrack={addTrack} /> {/* Pass function */}
        </div>
    );
}

export default SearchResults;