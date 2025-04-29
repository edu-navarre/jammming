import React from 'react';

function Tracklist({ tracks }) {
    return (
        <ul>
            {tracks.map(track => (
                <li key={track.data.id}>
                    {track.data.name} 
                    {track.data.artists?.items?.length > 0 ? ` by ${track.data.artists.items[0].profile.name}` : "Unknown Artist"}
                </li>
            ))}
        </ul>
    );
}

export default Tracklist;