import React from 'react'
import CustomIngredients from './CustomIngredients'

// css
import '../css/drink.css'

const Drink = ({drink, removeDrink}) => {
    const imgSource = `http://localhost:3001/${drink.drinkImage}`

    const drinkDeletus = (event) => {
        event.preventDefault()
        removeDrink(drink)
    }
    return (
        <div id="drinkEntry">
            {drink.name} <br/>
            {drink.glassware} <br/>
            {drink.description} <br/>
            <CustomIngredients item={drink}/>
            <img src={imgSource} alt="drink" />
            <input type="button" value="Remove" onClick={drinkDeletus}/>
            <br/>
        </div>
    )
}

export default Drink