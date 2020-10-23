/*
* Search component searches for drinks from the drink db.
*/

import React, { useState, useEffect } from 'react'
import searchService from '../services/searchServ'

// componets
import List from './List'

// css
import {makeStyles} from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'

import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import OutlinedInput from '@material-ui/core/OutlinedInput'

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

    const classes = useStyles()
    const [drinks, setDrinks] = useState([])
    const [search, setSearch] = useState("")
    const [query, setQuery] = useState("null")

    useEffect(() => {
        getDrinks(query)
    }, [query])

    const getDrinks = async searchTerm => {
        try {
            const data = await searchService.getDrinks(searchTerm)
            setDrinks(data.drinks)
        }
        catch (exception)
        {
            console.log(exception)
        }
    }

    const updateSearch = e => {
        setSearch(e.target.value)
    }

    const getSearch = e => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    return (
        <Container component="main" maxWidth="lg">
            <CssBaseline />
            <div className={classes.paper}>
                <h1>Search Drinks</h1>
                <form onSubmit={getSearch} className={classes.textfield}>
                    <OutlinedInput 
                        className={classes.textfield}
                        placeholder="Search Drink"
                        value={search}
                        onChange={updateSearch}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton type="submit" aria-label="search">
                                    <SearchIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </form>
            </div>
            <List results={drinks}/>
        </Container>
    )
}

export default Search