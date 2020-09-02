import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route, Link, useParams, useHistory} from 'react-router-dom'

//components
import About from './components/About'
import Menu from './components/Menu'
import Search from './components/Search'
import MyDrinks from './components/MyDrinks'

const App = () => {
    return (
        <div>
            <h1>Drink App</h1>
            <Router>
                <Menu />
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/myDrinks">
                        <MyDrinks />
                    </Route>
                    <Route path="/">
                        <Search />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default App;
