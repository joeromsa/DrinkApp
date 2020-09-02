import React from 'react'
import combineArrs from '../utils/arrayHandle'

const Ingredients = ({item}) => {
    

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
        <ul>{ingAndMes.map(ingredient => 
            <li key={ingredient}>
                {ingredient}
            </li>)}
        </ul>
    )
}

export default Ingredients