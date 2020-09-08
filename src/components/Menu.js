import React from 'react'
import { Link } from 'react-router-dom'

const Menu = ( {auth, setAuth} ) => {
    const padding = {
        paddingRight: 5
    }

    const logout = () => {
        window.localStorage.removeItem('loggedDrinkAppUser')
        setAuth(null)
    }

    return (
        <div>
            <Link style={padding} to="/">Home</Link>
            {auth && <Link style={padding} to="/myDrinks">My Drinks</Link>}
            <Link style={padding} to="/about">About</Link>
            {!auth && <Link style={padding} to="/login">Login</Link>}
            {!auth && <Link style={padding} to="/signup">Sign up</Link>}
            {auth && <Link style={padding} to="/" onClick={logout}>Log out</Link>}
        </div>
    )
}

export default Menu