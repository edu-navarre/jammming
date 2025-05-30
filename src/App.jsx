import React, { useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';
import Playlist from './components/Playlist/Playlist';
import './App.css';

function App() {
    const [searchResults, setSearchResults] = useState([]); // Stores search results
    const [playlistTracks, setPlaylistTracks] = useState([]); // Stores playlist tracks

    // Function to add a track to the playlist (if not already added)
    const addTrack = (track) => {
        if (!playlistTracks.some(t => t.data.id === track.data.id)) {
            setPlaylistTracks([...playlistTracks, track]);
        }
    };

    // Function to remove a track from the playlist
    const removeTrack = (track) => {
        setPlaylistTracks(playlistTracks.filter(t => t.data.id !== track.data.id));
    };

    // Stub function for saving playlist to Spotify
    const savePlaylist = () => {
        console.log("Saving Playlist:", playlistTracks);
        // Spotify API logic will go here
    };

    return (
        <div>
            <h1>Jammming</h1>
            <SearchBar setSearchResults={setSearchResults} />
            <SearchResults searchResults={searchResults} addTrack={addTrack} />
            <Playlist playlistTracks={playlistTracks} removeTrack={removeTrack} savePlaylist={savePlaylist} />
        </div>
    );
}

export default App;