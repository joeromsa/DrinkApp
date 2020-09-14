import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//components
import About from './components/About'
import Menu from './components/Menu'
import Search from './components/Search'
import MyDrinks from './components/MyDrinks'
import Login from './components/Login'
import Signup from './components/Signup'
import drinksService from './services/drinksServ'

import './css/app.css'

const App = () => {

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
        <div className="App">
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
