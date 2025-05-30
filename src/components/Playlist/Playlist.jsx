import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

function Playlist({ playlistTracks, removeTrack, savePlaylist }) {
    return (
        <div className={styles.playlist}>
            <h2>My Playlist</h2>
            <Tracklist tracks={playlistTracks} removeTrack={removeTrack} /> {/* Allow removal */}
            <button onClick={savePlaylist} className={styles.saveButton}>Save to Spotify</button>
        </div>
    );
}

export default Playlist;
