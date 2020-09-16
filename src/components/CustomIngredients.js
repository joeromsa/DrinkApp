/*
* CustomIngredients component used to display ingredients returned from server.
* item- object that contains data for a drink.
*/

import React from 'react'

//css
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    list: {
        display: 'flex',
        justifyContent: 'center'
    }
  }))

const CustomIngredients = ({item}) => {
    const classes = useStyles()

    return (
        <List>{item.ingredients.map(ingredient =>
            <ListItem className={classes.list} key={ingredient.ingredient}>
                {ingredient.quantity} {ingredient.ingredient}
            </ListItem>)}
        </List>
    )
}

export default CustomIngredients