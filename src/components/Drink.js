import React from 'react'
import CustomIngredients from './CustomIngredients'

// css
import {makeStyles} from '@material-ui/core'
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(8, 6),
        backgroundColor: '#cfe8fc',
        borderRadius: '10px',
        boxShadow: '0px 5px 15px rgb(71, 71, 71)',
        marginBottom: theme.spacing(8),
    },
    glass: {
        padding: theme.spacing(1, 1)
    },
    image: {
        width: "200px",
        height: "200px",
        objectFit: 'cover',
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        borderRadius: '8px'
    },
    button: {
        marginTop: '5%'
    }
  }))

const Drink = ({drink, removeDrink}) => {
    const imgSource = `http://localhost:3001/${drink.drinkImage}`

    const classes = useStyles()

    const drinkDeletus = (event) => {
        event.preventDefault()
        removeDrink(drink)
    }

    return (
        <>
            <CssBaseline/>
            <Container maxWidth="sm" className={classes.paper}>
                <Typography variant="h6" align="center">
                    {drink.name}
                </Typography>
                <div><CustomIngredients item={drink}/></div>
                <Typography variant="body1" align="center">
                    {drink.description}
                </Typography>
                <Typography variant="body1" align="center" className={classes.glass}>
                    Serve in a {drink.glassware}
                </Typography>
                <img src={imgSource} alt={drink.name} className={classes.image} />
                <Container align="center" className={classes.button}>
                    <Button variant="contained" onClick={drinkDeletus}>Remove</Button>
                </Container>
            </Container>
        </>
    )

    // return (
    //     <div id="drinkEntry">
    //         {drink.name} <br/>
    //         {drink.glassware} <br/>
    //         {drink.description} <br/>
    //         <CustomIngredients item={drink}/>
    //         <img src={imgSource} alt="drink" />
    //         <input type="button" value="Remove" onClick={drinkDeletus}/>
    //         <br/>
    //     </div>
    // )
}

export default Drink