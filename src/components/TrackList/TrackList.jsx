import React from 'react';
import styles from './Tracklist.module.css';

function Tracklist({ tracks, addTrack, removeTrack }) {
    return (
        <ul className={styles.container}>
            {tracks
            .filter(track => track.data.name && 
                        track.data.artists?.items?.length > 0 && 
                        track.data.albumOfTrack?.coverArt?.sources[0]?.url)
            .map(track => {
                const albumCover = track.data.albumOfTrack.coverArt.sources[0].url; // Extract cover image
                
                return (
                    <li key={track.data.id} className={styles.Tracklist}>
                        <img 
                            src={albumCover} 
                            alt={`Album cover of ${track.data.name}`} 
                            className={styles.albumArt} 
                        />

                        <div className={styles.trackDetails}> {/* Container for text */}
                            <strong>{track.data.name}</strong>
                            <span>{track.data.artists.items[0].profile.name}</span>
                        </div>

                        <div className={styles.buttonContainer}>
                            {addTrack && <button onClick={() => addTrack(track)}>+</button>}
                            {removeTrack && <button onClick={() => removeTrack(track)}>-</button>}
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}


export default Tracklist;