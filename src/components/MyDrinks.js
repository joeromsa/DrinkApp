import React, { useState, useEffect } from 'react'
import DrinkForm from './DrinkForm'
import Drink from './Drink'
import drinkService from '../services/drinksServ'

//css
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    button: {
        marginTop: '5%',
        marginBottom: '5%',
        display: 'flex',
        justifyContent: 'center'
    },
    title: {
        marginTop: '5%',
    }
  }))

const MyDrinks = () => {
    const [drinks, setDrinks] = useState([])
    const [showAdd, setShowAdd] = useState(false)
    const [buttonText, setButtonText] = useState('Add New')

    const classes = useStyles()

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

    const changeView = (event) => {
        event.preventDefault()
        setShowAdd(!showAdd)
        if (buttonText === 'Add New') {
            setButtonText('Cancel')
        }
        else {
            setButtonText('Add New')
        }
    }

    return (
        <Container maxWidth="lg">
            <CssBaseline />
            <Typography align="center" variant="h4" className={classes.title}>
                My Drinks
            </Typography>
            <Container className={classes.button}>
                <Button variant="contained" onClick={changeView}>{buttonText}</Button>
            </Container>
            <Container maxWidth="lg">
                {showAdd && <DrinkForm createDrink={addDrink}/>}
            </Container>
            <Container maxWidth="lg">
                {drinks.map(drink => 
                    <Drink key={drink.id} drink={drink} removeDrink={removeDrink}/> 
                )}
            </Container>
            
        </Container>
    )

    // return (
    //     <div>
    //         <div>
    //             <h1>My Drinks</h1>
    //             <input type="button" value={buttonText} onClick={changeView} />
    //             {showAdd && <DrinkForm createDrink={addDrink}/>}
    //             {drinks.map(drink => 
    //                 <Drink key={drink.id} drink={drink} removeDrink={removeDrink}/> 
    //             )}
    //         </div>
    //     </div>
    // )
}

export default MyDrinks