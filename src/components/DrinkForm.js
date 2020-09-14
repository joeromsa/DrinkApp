import React, { useState } from 'react'

// css
import Container from '@material-ui/core/Container'
import CssBaseline from '@material-ui/core/CssBaseline'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import PhotoCamera from '@material-ui/icons/PhotoCamera'
import Delete from '@material-ui/icons/Delete'
import Add from '@material-ui/icons/Add'
import Button from '@material-ui/core/Button'
import {makeStyles} from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import { green } from '@material-ui/core/colors'
import clsx from 'clsx'


const useStyles = makeStyles((theme) => ({
        layout: {
            width: 'auto',
            marginLeft: theme.spacing(2),
            marginRight: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
                width: 600,
                marginLeft: 'auto',
                marginRight: 'auto',
        },
        },
        paper: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(3),
            padding: theme.spacing(2),
            [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
                marginTop: theme.spacing(6),
                marginBottom: theme.spacing(6),
                padding: theme.spacing(3),
        },
        SubButton: {
            marginTop: '5%'
        },
        buttonSuccess: {
            backgroundColor: green[500],
            '&:hover': {
              backgroundColor: green[700],
            },
        },
    }
  }));

const DrinkForm = ({createDrink}) => {
    const [drink, setDrink] = useState({ name: '',  glassware: '', description: '',})
    const blankIng = {quantity: '', ingredient: ''}
    const [ingredients, setIngredients] = useState([ {...blankIng} ])
    const [file, setFile] = useState(null)

    // state for loading button
    const [success, setSuccess] = useState(false)

    const classes = useStyles()

    const buttonClassname = clsx({
        [classes.buttonSuccess]: success,
    });

    const handleDrinkChange = (e) => setDrink({
        ...drink,
        [e.target.name]: [e.target.value],
    })

    const handleIngChange = (e) => {
        const updatedIng = [...ingredients]
       // console.log(e.target.className.split(" ").filter(word => word !== 'MuiInputBase-input' && word !== 'MuiInput-input')[0])
        updatedIng[e.target.dataset.idx][e.target.className.split(" ").filter(word => word !== 'MuiInputBase-input' && word !== 'MuiInput-input')[0]] = e.target.value
        setIngredients(updatedIng)
    }

    const addIng = () => {
        setIngredients([...ingredients, {...blankIng}])
    }

    const removeEntry = (sent) => {
        setIngredients(ingredients.filter((ing, index) => index !== sent))
    }

    const fileSelctedHandler = (event) =>  {
        const fileIn = event.target.files[0]
        setFile(fileIn)
        setSuccess(true)
    }

    const addDrink = (event) => {
        event.preventDefault()
        const fd = new FormData()
        fd.append('name', drink.name[0])
        fd.append('glassware', drink.glassware[0])
        fd.append('description', drink.description[0])
        fd.append('ingredients', JSON.stringify(ingredients))
        fd.append('drinkImage', file, file.name)
        createDrink(fd)
        setIngredients([ {...blankIng} ])
        setDrink({ name: '',  glassware: '', description: '',})
        setFile('')
    }
    return (
        <Container maxWidth="lg" className={classes.layout}>
            <CssBaseline/>
            <Paper className={classes.paper}>
                <Typography component="h5" align="center">
                    Create New Drink
                </Typography>
                <form onSubmit={addDrink}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="drink name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={drink.name}
                        onChange={handleDrinkChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="glassware"
                        label="glassware"
                        name="glassware"
                        autoComplete="glassware"
                        autoFocus
                        value={drink.glassware}
                        onChange={handleDrinkChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        multiline
                        id="description"
                        label="description"
                        name="description"
                        autoComplete="description"
                        autoFocus
                        value={drink.description}
                        onChange={handleDrinkChange}
                    />
                    <input accept="image/*" name="drinkImage" id="drinkImage" type="file" style={{display: 'none'}} onChange={fileSelctedHandler} />
                    <label htmlFor="drinkImage">
                        <IconButton color="primary" aria-label="upload picture" component="span" className={buttonClassname}>
                            {success ? <CheckIcon /> : <PhotoCamera />}
                        </IconButton>
                    </label>


                    
                    {/* <label htmlFor="drinkImage">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <PhotoCamera />
                        </IconButton>
                    </label> */}
                    <Container align="center">
                         <IconButton color="primary" aria-label="add ingredient" component="span" onClick={addIng} className={classes.add}>
                            <Add />
                        </IconButton>
                    </Container>
                    <Container>
                        {
                            ingredients.map((val, idx) => {
                                const quantId = `quantity-${idx}`
                                const ingId = `ingredient-${idx}`
                                return (
                                    <Container key={`entry-${idx}`}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            label="quantity"
                                            autoComplete="quantity"
                                            autoFocus
                                            name={quantId}
                                            data-idx={idx}
                                            id={quantId}
                                            inputProps={{className: "quantity", 'data-idx': `${idx}`}}
                                            value={ingredients[idx].quantity}
                                            onChange={handleIngChange}
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            label="ingredient"
                                            autoComplete="ingredient"
                                            autoFocus
                                            name={ingId}
                                            data-idx={idx}
                                            id={ingId}
                                            inputProps={{className: "ingredient", 'data-idx': `${idx}`}}
                                            value={ingredients[idx].ingredient}
                                            onChange={handleIngChange}
                                        />
                                        <Container  align="right">
                                        <IconButton aria-label="delete entry" component="span"  onClick={() => removeEntry(idx)}>
                                            <Delete />
                                        </IconButton></Container>
                                    </Container>
                                )
                            })
                        }
                    </Container>
                    <Container align="center"  className={classes.SubButton}>
                        <Button variant="contained" color="primary" type="submit" >Add Drink</Button>
                    </Container>
                </form>
            </Paper>
        </Container>
    )


    // return (
    //     <div>
    //         <h1>Create New Drink</h1>
    //         <form onSubmit={addDrink}>
    //             <label htmlFor="name">Name</label>
    //             <input type="text" name="name" id="name" value={drink.name} onChange={handleDrinkChange}/>
    //             <label htmlFor="glassware">Glassware</label>
    //             <input type="text" name="glassware" id="glassware" value={drink.glassware} onChange={handleDrinkChange}/>
    //             <label htmlFor="description">Description</label>
    //             <input type="text" name="description" id="description" value={drink.description} onChange={handleDrinkChange} />
    //             <label htmlFor="drinkImage">Drink Image</label>
    //             <input type="file" name="drinkImage" id="drinkImage" onChange={fileSelctedHandler}/>
    //             <input type="button" value="Add New Ingredient" onClick={addIng}/>
    //             {
    //                 ingredients.map((val, idx) => {
    //                     const quantId = `quantity-${idx}`
    //                     const ingId = `ingredient-${idx}`
    //                     return (
    //                         <div key={`entry-${idx}`}>
    //                             <label htmlFor={quantId}>Quantity</label>
    //                             <input
    //                                 type="text"
    //                                 name={quantId}
    //                                 data-idx={idx}
    //                                 id={quantId}
    //                                 className="quantity"
    //                                 value={ingredients[idx].quantity}
    //                                 onChange={handleIngChange}
    //                             />
    //                             <label htmlFor={ingId}>Ingredient</label>
    //                             <input
    //                                 type="text"
    //                                 name={ingId}
    //                                 data-idx={idx}
    //                                 id={ingId}
    //                                 className="ingredient"
    //                                 value={ingredients[idx].ingredient}
    //                                 onChange={handleIngChange}
    //                             />
    //                             <input type="button" value="Remove" onClick={() => removeEntry(idx)}/>
    //                         </div>
    //                     )
    //                 })
    //             }
    //             <input type="submit" value="Submit" />
    //         </form>
    //     </div>
    // )
}
export default DrinkForm