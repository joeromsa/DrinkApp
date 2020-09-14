import React from 'react'
import combineArrs from '../utils/arrayHandle'

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

const Ingredients = ({item}) => {
    
    const classes = useStyles()

    const addIng = () => {
        let ingredients = []
        let measurements = []

        for (let [key, value] of Object.entries(item)) {
            if (key.includes("strIngredient") && (value !== null && value !== ''))
            {
                if (!ingredients.includes(value)) {
                ingredients.push(value)
                }
            }
            else if (key.includes("strMeasure") && (value !== null && value !== '' && !value.includes(',')))
            {
                measurements.push(value)
            }
        }

        combineArrs(ingredients, measurements)

        return ingredients
    }

    let ingAndMes = addIng()

    return (
        <List>{ingAndMes.map(ingredient =>
            <ListItem className={classes.list} key={ingredient}>
                {ingredient}
            </ListItem>)}
        </List>
    )

    // return (
    //     <ul>{ingAndMes.map(ingredient => 
    //         <li key={ingredient}>
    //             {ingredient}
    //         </li>)}
    //     </ul>
    // )
}

export default Ingredients