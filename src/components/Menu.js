/*
* Menu component displays menu for navigating around application.
* Auth- user object that contains information about the user.
* setAuth- function to set information about the user or remove it. 
*/

import React from 'react'
//import { Link } from 'react-router-dom'

// style
import { makeStyles } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Link from '@material-ui/core/Link'
import { useMediaQuery } from 'react-responsive'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import InfoIcon from '@material-ui/icons/InfoOutlined'
import LockIcon from '@material-ui/icons/LockOpenOutlined'
import LocalBarIcon from '@material-ui/icons/LocalBarOutlined'
import LogOutIcon from '@material-ui/icons/ExitToAppOutlined'

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        
    },
    appBarBottom: {
        top: 'auto',
        bottom: 0,
    },
    toolbar: {
        flexWrap: 'wrap',
    },
    toolbarBottom: {
        display: 'flex',
        alignItems: 'space-between',
        justifyContent: 'center',
    },
    item: {
        flex: '1'
    },
    toolbarTitle: {
        flexGrow: 1,
    },
    link: {
        margin: theme.spacing(1, 1.5),
    }
}))

const Menu = ( {auth, setAuth} ) => {

    const isMobile = useMediaQuery({ query: '(max-device-width: 1224px)' })

    const classes = useStyles()

    const logout = () => {
        window.localStorage.removeItem('loggedDrinkAppUser')
        setAuth(null)
    }

    return (
        <>
            <CssBaseline />
            {!isMobile && <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant="h4" color="inherit" noWrap className={classes.toolbarTitle}>
                        Drink App
                    </Typography>
                    <nav>
                        <Link variant="button" color="textPrimary" href="/" className={classes.link}>Home</Link>
                        {auth && <Link variant="button" color="textPrimary" href="/mydrinks" className={classes.link}>My Drinks</Link>}
                        <Link variant="button" color="textPrimary" href="/about" className={classes.link}>About</Link>
                    </nav>  
                        {!auth && <Button href="/signin" className={classes.link}>Sign In</Button>}
                        {!auth && <Button variant="outlined" href="/signup" className={classes.link}>Sign Up</Button>}
                        {auth && <Button variant="outlined" href="/" onClick={logout} className={classes.link}>Log Out</Button>}
                    
                </Toolbar>
            </AppBar>}
            {isMobile && <AppBar position="fixed" color="default" className={classes.appBarBottom}>
                    <Toolbar className={classes.toolbarBottom}>
                        <IconButton color="primary" aria-label="home" href="/" className={classes.item}>
                            <HomeIcon />
                        </IconButton>
                        {auth && <IconButton color="primary" aria-label="my drinks" href="/mydrinks" className={classes.item}>
                            <LocalBarIcon />
                        </IconButton>}
                        <IconButton color="primary" aria-label="about" href="/about" className={classes.item}>
                            <InfoIcon />
                        </IconButton>
                        {!auth && <IconButton color="primary" aria-label="signin" href="/signin" className={classes.item}>
                            <LockIcon />
                        </IconButton>}
                        {auth && <IconButton color="primary" aria-label="log out" href="/" onClick={logout} className={classes.item}>
                            <LogOutIcon />
                        </IconButton>}
                    </Toolbar>
                </AppBar>}
        </>
    )
}

export default Menu