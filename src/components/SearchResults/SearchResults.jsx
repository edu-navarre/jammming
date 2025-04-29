import React from 'react';
import Tracklist from '../TrackList/TrackList'; // Import Tracklist component

function SearchResults({ searchResults }) {
    return (
        <div>
            <h2>Search Results</h2>
            <Tracklist tracks={searchResults} /> {/* Pass tracks to Tracklist */}
        </div>
    );
}

export default SearchResults;