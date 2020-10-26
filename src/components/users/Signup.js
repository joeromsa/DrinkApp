/*
* Signup comonenet used to create a new user account.
* setUser- function used to set user information. 
*/

import React, { useState } from 'react'
import userService from '../../services/userServ'
import loginService from '../../services/loginServ'
import drinksService from '../../services/drinksServ'

// style
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { CssBaseline, Typography, Button } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import TextField from '@material-ui/core/TextField'
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }))

const Signup = ({setUser}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const classes = useStyles()

    const handleSignUp = async (event) => {
        event.preventDefault()
        try {
            await userService.signup({username, name, password})
            const user = await loginService.login({ username, password, })
            setUsername('')
            setPassword('')
            setName('')
            window.localStorage.setItem('loggedDrinkAppUser', JSON.stringify(user))
            drinksService.setToken(user.token)
            setUser(user)
        }
        catch (exception) {
            console.log('username already exists')
        }

    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} >
                    <AccountCircleOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleSignUp}>
                <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label="Name"
                        name="name"
                        autoComplete="name"
                        autoFocus
                        value={name}
                        onChange={({target}) => setName(target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="username"
                        autoFocus
                        value={username}
                        onChange={({target}) => setUsername(target.value)}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={({target}) => setPassword(target.value)}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Typography variant="body2" align="center">
                        <Link href="/signin" >
                            {"Already have an account? Sign In"}
                        </Link>
                    </Typography>
                </form>
            </div>
        </Container>
    )
}

export default Signup