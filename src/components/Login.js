import React, { useState } from 'react'
import loginService from '../services/loginServ'
import drinksService from '../services/drinksServ'

const Login = ({setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

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
        <div>
            <h1>Login</h1>
            <form onSubmit={handleLogin}>
                <div>
                    username
                    <input type="text" value={username} name="Username" onChange={({target}) => setUsername(target.value)}/>
                </div>
                <div>
                    password
                    <input type="password" value={password} name="Password" onChange={({target}) => setPassword(target.value)}/>
                </div>
                <button type="sumbit">login</button>
            </form>
        </div>
    )
}

export default Login