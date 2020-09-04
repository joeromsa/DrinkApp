import React from 'react'
import CustomIngredients from './CustomIngredients'

const Drink = ({drink}) => {
    const imgSource = `http://localhost:3001/${drink.drinkImage}`
    return (
        <div>
            {drink.name} <br/>
            {drink.glassware} <br/>
            {drink.description} <br/>
            <CustomIngredients item={drink}/>
            <img src={imgSource} alt="drink" />
            <br/>
        </div>
    )
}

export default Drink