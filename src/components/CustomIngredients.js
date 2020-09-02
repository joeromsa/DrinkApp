import React from 'react'
//import combineArrs from '../utils/arrayHandle'

const CustomIngredients = ({item}) => {
    //const ing = combineArrs(item.ingredients, item.quantity)
    return (
        <ul>{item.ingredients.map(ingredient => 
            <li key={ingredient.ingredient}>
                {ingredient.quantity} {ingredient.ingredient}
            </li>)}
        </ul>
    )
}

export default CustomIngredients