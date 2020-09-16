/*
* Login component logs the user in.
* setUser- object containing user details.
*/

import React, { useState } from 'react'
import loginService from '../services/loginServ'
import drinksService from '../services/drinksServ'

// style
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { CssBaseline, Typography, Button } from '@material-ui/core'
import Avatar from '@material-ui/core/Avatar'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import TextField from '@material-ui/core/TextField'
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

const Login = ({setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const classes = useStyles()

    const handleLogin = async (event) => {
        event.preventDefault()
        try {
            const user = await loginService.login({ username, password, })
            setUsername('')
            setPassword('')
            window.localStorage.setItem('loggedDrinkAppUser', JSON.stringify(user))
            drinksService.setToken(user.token)
            setUser(user)
        }
        catch (exception) {
            console.log('wrong credentials')
        }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar} >
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate onSubmit={handleLogin}>
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
                        Sign In
                    </Button>
                    <Typography variant="body2" align="center">
                        <Link href="/signup" >
                            {"Don't have an account? Sign Up"}
                        </Link>
                    </Typography>
                </form>
            </div>
        </Container>
    )
}

export default Login