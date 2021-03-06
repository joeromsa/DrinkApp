/*
* About component holds information about the site.
*/

import React from 'react'
import {makeStyles} from '@material-ui/core/styles'

//css
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles((theme) => ({
    image: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '30%',
        height: 'auto'
    },
    image2: {
        display: 'block',
        marginLeft: '30%',
        marginRight: 'auto',
        maxWidth: '20%',
        maxHeight: '25%',
        float: "left",
        paddingRight: '5%'
    },
    title: {
        marginTop: '5%'
    },
    body: {
        marginTop: '5%',
        marginRight: '20%',
        marginLeft: '20%',
        marginBottom: '20%',
        letterSpacing: '1px',
        lineHeight: '1.8',
        fontSize: '20px'
    },
    subTitle: {
        marginLeft: '30%',
        letterSpacing: '1px',
        lineHeight: '1.8',
        fontSize: '30px'
    }
  }))

const About = () => {

    const classes = useStyles()

    return (
        <Container maxWidth="lg">
            <img src={require('../../assets/drinksMult.png')} alt="drinks" className={classes.image} />
            <Typography variant="h4" align="center" className={classes.title}>
                About Drink App
            </Typography>
            <Typography variant="body1" align="center" className={classes.body}>
                Drink App is dedicated to good drinks and good times with family and friends. Our goal is give 
                anyone the opportunity to make their favorite drinks from the comfort of their home. We also think
                doing things your own way is import too, so we also have provided the opportunity to create your own 
                original recipes, and share them with the world.
            </Typography>
        </Container>
    )
}

export default About