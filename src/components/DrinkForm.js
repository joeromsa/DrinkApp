import React, { useState } from 'react'

// css
import '../css/dynamic-form-style.css'

const DrinkForm = ({createDrink}) => {
    const [drink, setDrink] = useState({ name: '',  glassware: '', description: '',})
    const blankIng = {quantity: '', ingredient: ''}
    const [ingredients, setIngredients] = useState([ {...blankIng} ])
    

    const handleDrinkChange = (e) => setDrink({
        ...drink,
        [e.target.name]: [e.target.value],
    })

    const handleIngChange = (e) => {
        const updatedIng = [...ingredients]
        updatedIng[e.target.dataset.idx][e.target.className] = e.target.value
        setIngredients(updatedIng)
    }

    const addIng = () => {
        setIngredients([...ingredients, {...blankIng}])
    }

    const removeEntry = (sent) => {
        setIngredients(ingredients.filter((ing, index) => index !== sent))
    }

    const addDrink = (event) => {
        event.preventDefault()
        createDrink({
            name: drink.name[0],
            glassware: drink.glassware[0],
            description: drink.description[0],
            ingredients: ingredients,
            id: Math.random()   // wont be worry with db
        })
        setIngredients([ {...blankIng} ])
        setDrink({ name: '',  glassware: '', description: '',})
    }


    return (
        <div>
            <h1>Create New Drink</h1>
            <form onSubmit={addDrink}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={drink.name} onChange={handleDrinkChange}/>
                <label htmlFor="glassware">Glassware</label>
                <input type="text" name="glassware" id="glassware" value={drink.glassware} onChange={handleDrinkChange}/>
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" value={drink.description} onChange={handleDrinkChange} />
                <input type="button" value="Add New Ingredient" onClick={addIng}/>
                {
                    ingredients.map((val, idx) => {
                        const quantId = `quantity-${idx}`
                        const ingId = `ingredient-${idx}`
                        return (
                            <div key={`entry-${idx}`}>
                                <label htmlFor={quantId}>Quantity</label>
                                <input
                                    type="text"
                                    name={quantId}
                                    data-idx={idx}
                                    id={quantId}
                                    className="quantity"
                                    value={ingredients[idx].quantity}
                                    onChange={handleIngChange}
                                />
                                <label htmlFor={ingId}>Ingredient</label>
                                <input
                                    type="text"
                                    name={ingId}
                                    data-idx={idx}
                                    id={ingId}
                                    className="ingredient"
                                    value={ingredients[idx].ingredient}
                                    onChange={handleIngChange}
                                />
                                <input type="button" value="Remove" onClick={() => removeEntry(idx)}/>
                            </div>
                        )
                    })
                }
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}
export default DrinkForm