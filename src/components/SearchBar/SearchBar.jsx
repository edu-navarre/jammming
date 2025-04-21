import React, { useState } from "react";
import styles from "./SearchBar.module.css";

function SearchBar({ setSearchResults }) { // Accept setSearchResults from props
    const [searchTerm, setSearchTerm] = useState("");

    const searchSpotify = async (e) => {
        e.preventDefault();

        const url = `https://spotify23.p.rapidapi.com/search/?q=${searchTerm}&type=tracks&limit=10`;
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "0c4492d752msha23d66c22f40d58p1e9159jsn5b51494e65d9",
                "X-RapidAPI-Host": "spotify23.p.rapidapi.com"
            }
        };

        try {
            const response = await fetch(url, options);
            const data = await response.json();
            setSearchResults(data.tracks.items); // Store results in App state
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div className={styles.searchBar}>
            <form onSubmit={searchSpotify}>
                <input
                    type="text"
                    placeholder="Search songs by name or artist..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>SEARCH</button>
            </form>
        </div>
    );
}

export default SearchBar;