import React, { useState, useEffect } from 'react'
import axios from 'axios'

// componets
import List from './List'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`)
        .then(response => {
            setDrinks(response.data.drinks)
        })
    }, [searchTerm])

    const handleChange = event => {
        setSearchTerm(event.target.value)
    } 

    return (
        <div>
            <h1>Search Drinks</h1>
            <div>
                <input value={searchTerm} onChange={handleChange} />
            </div>
            <List results={drinks} />
        </div>
    )
}

export default Search