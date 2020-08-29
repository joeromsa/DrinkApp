import React, { useState, useEffect } from 'react'
import axios from 'axios'

// componets
import List from './List'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        if (searchTerm.length === 1) 
        {
            axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchTerm}`)
            .then(response => {
                setDrinks(response.data.drinks)
            }) 
        }
    }, [searchTerm])

    const handleChange = event => {
        setSearchTerm(event.target.value)
    } 

    useEffect(() => {
        const results = drinks.filter(drink => 
            drink.strDrink.toLowerCase().includes(searchTerm))
            setSearchResults(results)
    }, [searchTerm, drinks])

    useEffect(() => {
        if (searchTerm.length === 0) {
            setSearchResults([])
        }
    }, [searchTerm])

    return (
        <div>
            <h1>Search Drinks</h1>
            <div>
                <input value={searchTerm} onChange={handleChange} />
            </div>
            <List results={searchResults} />
        </div>
    )
}

export default Search