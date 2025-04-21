import React from 'react'
import styles from './SearchBar.module.css'
import { useState } from 'react'

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div className={styles.searchBar}>
            <form>
                <input 
                    type="text" 
                    placeholder="Search songs by name or artist..." 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.input}
                />
                <button className={styles.button}>SEARCH</button>
            </form>
        </div>
    )
}


export default SearchBar;