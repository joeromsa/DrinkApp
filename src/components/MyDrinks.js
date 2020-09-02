import React, { useState } from 'react'
import DrinkForm from './DrinkForm'
import Drink from './Drink'

const MyDrinks = () => {
    const [drinks, setDrinks] = useState([
        {
            id: 1, 
            name: "mai tai", 
            glassware: "old fashioned glass", 
            description: "combine all ingredients",
            quantity: ["1 oz", "1 oz", "5 leaves"],
            ingredients: [
                {
                    quantity: "1 oz", 
                    ingredient: "rum"
                }, 
                {
                    quantity: "1 oz", 
                    ingredient: "curisou"
                },
                {
                    quantity: "5 leaves",
                    ingredient: "mint"
                }
            ],
        }, 
        {
            id: 2, 
            name: "old fashioned", 
            glassware: "old fashioned glass", 
            description: "combine all ingredients",
            ingredients: [
                {
                    quantity: "1 barspoon",
                    ingredient:"simple syrup"
                }, 
                {
                    quantity: "2 dashes",   
                    ingredient: "angosturo bitter"
                }, 
                {
                    quantity: "2 oz",
                    ingredient: "bourbon"
                }
            ],
        }])

        const addDrink = (drinkObject) => {
            setDrinks(drinks.concat(drinkObject))
        }

    return (
        <div>
            <div>
                <h1>My Drinks</h1>
                {drinks.map(drink => 
                    <Drink key={drink.id} drink={drink} /> 
                )}
            </div>
            <DrinkForm createDrink={addDrink}/>
        </div>
    )
}

export default MyDrinks