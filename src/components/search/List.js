/*
* List component displays the results returned from the api.
* results- list of results from the api.
*/

import React from 'react'

// componets
import Name from './Name'

// css
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(8, 6),
        backgroundColor: '#cfe8fc',
        borderRadius: '10px',
        boxShadow: '0px 5px 15px rgb(71, 71, 71)',
    },
    glass: {
        padding: theme.spacing(10, 0, 10, 0),
        borderRadius: '10px',
    }
  }))

const List = ({results}) => {
    const classes = useStyles()
    

    if (results === null || results === '') {
        return <p></p>
    }
    else 
    {
        return (
            <Container className={classes.glass}>
                {results.map(item => <Name key={item.idDrink} item={item} />)}
            </Container>
        )
    }
}

export default List