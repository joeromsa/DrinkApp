import React from 'react'
import CustomIngredients from './CustomIngredients'

const Drink = ({drink}) => {
    return (
        <div>
            {drink.name} <br/>
            {drink.glassware} <br/>
            {drink.description} <br/>
            <CustomIngredients item={drink}/>
            <br/>
        </div>
    )
}

export default Drink