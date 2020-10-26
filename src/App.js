/*
* Launching point for application.
*/

import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//components
import About from './components/base/About'
import Menu from './components/base/Menu'
import Search from './components/search/Search'
import MyDrinks from './components/drinks/MyDrinks'
import Login from './components/users/Login'
import Signup from './components/users/Signup'
import drinksService from './services/drinksServ'
import {makeStyles} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    backgroundApp: {
        minHeight: '100vh',
        backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%)'
    }
  }))

const App = () => {

    const classes = useStyles()

    const [user, setUser] = useState(null)

    useEffect(() => {
        const loggedUserJSON = window.localStorage.getItem('loggedDrinkAppUser')
        if (loggedUserJSON) {
            const user = JSON.parse(loggedUserJSON)
            setUser(user)
            drinksService.setToken(user.token)
        }
    }, [])

    return (
        <div className={classes.backgroundApp}>
            <Router>
                <Menu auth={user} setAuth={setUser}/>
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    {user && <Route path="/myDrinks">
                        <MyDrinks />
                    </Route>}
                    {!user && <Route path="/signin">
                        <Login setUser={setUser}/>
                    </Route>}
                    {!user && <Route path="/signup">
                        <Signup setUser={setUser}/>
                    </Route>}
                    <Route path="/">
                        <Search />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
