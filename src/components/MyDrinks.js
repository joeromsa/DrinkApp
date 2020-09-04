import React, { useState, useEffect } from 'react'
import DrinkForm from './DrinkForm'
import Drink from './Drink'
import drinkService from '../services/drinksServ'

const MyDrinks = () => {
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        drinkService.getAll().then(drinks => setDrinks(drinks))
    }, [])

    const addDrink = async (drinkObject) => {
        try {
            const drink = await drinkService.create(drinkObject)
            setDrinks(drinks.concat(drink))
        }
        catch (exception) {
            console.log(exception)
        }
    }

    const removeDrink = async (drinkObject) => {
        try {
            await drinkService.remove(drinkObject.id)
            setDrinks(drinks.filter(drink => drink.id !== drinkObject.id))
        }
        catch(exception) {
            console.log(exception)
        }
    }

    return (
        <div>
            <div>
                <h1>My Drinks</h1>
                {drinks.map(drink => 
                    <Drink key={drink.id} drink={drink} removeDrink={removeDrink}/> 
                )}
            </div>
            <DrinkForm createDrink={addDrink}/>
        </div>
    )
}

export default MyDrinks