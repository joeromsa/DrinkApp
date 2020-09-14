import React from 'react'
import Ingredients from './Ingredients'

//css
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import {makeStyles} from '@material-ui/core'

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
        marginLeft: 'auto',
        marginRight: 'auto',
        display: 'block',
        borderRadius: '8px'
    }
  }))


const Name = ({item}) => {

    const classes = useStyles()

    return (
        <>
            <CssBaseline/>
            <Container maxWidth="sm" className={classes.paper}>
                <Typography variant="h6" align="center">
                    {item.strDrink}
                </Typography>
                <div><Ingredients item={item} /></div>
                <Typography variant="body1" align="center">
                    {item.strInstructions}
                </Typography>
                <Typography variant="body1" align="center" className={classes.glass}>
                    Serve in a {item.strGlass}
                </Typography>
                
                <img src={item.strDrinkThumb} alt={item.strDrink} className={classes.image} />
            </Container>
        </>
    )
}

export default Name