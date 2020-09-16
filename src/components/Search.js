/*
* Search component searches for drinks from the drink db.
*/

import React, { useState, useEffect } from 'react'
import axios from 'axios'

// componets
import List from './List'

// css
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core'
import CssBaseLine from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
    textfield: {
        width: '100%'
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
  }))

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [searchResults, setSearchResults] = useState([])
    const [drinks, setDrinks] = useState([])

    const classes = useStyles()

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
        <Container component="main" maxWidth="lg">
            <CssBaseLine/>
            
            <div className={classes.paper}>
                <h1>Search Drinks</h1>
                <TextField value={searchTerm} onChange={handleChange} variant="outlined" label="Search Drink" className={classes.textfield} />
            </div>
            <List results={searchResults}/>
        </Container>
    )
}

export default Search