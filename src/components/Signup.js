import React, { useState } from 'react'
import userService from '../services/userServ'
import loginService from '../services/loginServ'
import drinksService from '../services/drinksServ'

const Signup = ({setUser}) => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

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
        <div>
            <h1>Sign Up</h1>
            <form onSubmit={handleSignUp}>
                <div>
                    Name
                    <input type="text" value={name} name="Name" onChange={({target}) => setName(target.value)}/>
                </div>
                <div>
                    Username
                    <input type="text" value={username} name="Username" onChange={({target}) => setUsername(target.value)}/>
                </div>
                <div>
                    Password
                    <input type="password" value={password} name="Password" onChange={({target}) => setPassword(target.value)}/>
                </div>
                <button type="sumbit">login</button>
            </form>
        </div>
    )
}

export default Signup