import React from 'react';

function SearchResults({ searchResults }) { // Accept searchResults from props
    return (
        <div>
            <h2>Search Results</h2>
            <ul>
                {searchResults.map(track => (
                <li key={track.data.id}>
                    {track.data.name} 
                    {track.data.artists?.items?.length > 0 ? ` by ${track.data.artists.items[0].profile.name}` : "Unknown Artist"}
                </li>
                ))}
            </ul>
        </div>
    );
}

export default SearchResults;