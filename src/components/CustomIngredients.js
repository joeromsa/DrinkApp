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

    // return (
    //     <ul>{item.ingredients.map(ingredient => 
    //         <li key={ingredient.ingredient}>
    //             {ingredient.quantity} {ingredient.ingredient}
    //         </li>)}
    //     </ul>
    // )
}

export default CustomIngredients