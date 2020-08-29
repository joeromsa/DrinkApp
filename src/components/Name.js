import React from 'react'
import Ingredients from './Ingredients'

const Name = ({item}) => {

    return (
        <div>
            <p>{item.strDrink}</p>
            <div><Ingredients item={item} /></div>
            <p>{item.strInstructions}</p>
            <img src={item.strDrinkThumb} alt={item.strDrink} />
        </div>
    )
}

export default Name