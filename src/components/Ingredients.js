import React from 'react'

const Ingredients = ({item}) => {
    

    const addIng = () => {
        let ingredients = []
        let measurements = []

        for (let [key, value] of Object.entries(item)) {
            if (key.includes("strIngredient") && (value !== null && value !== ''))
            {
                ingredients.push(value)
            }
            else if (key.includes("strMeasure") && (value !== null && value !== ''))
            {
                measurements.push(value)
            }
        }

        combineArrs(ingredients, measurements)

        return ingredients
    }

    const combineArrs = (ar1, ar2) => {
        ar1.forEach((element, index) => {
            ar1[index] = ar2[index] + ' ' + element
        });

        return ar1
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