/*
* Services used to communicate with back end realted to login data.
*/

import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/login' // change for production

// sends request to login in user.
const login = async credentials => {
    const response = await axios.post(baseUrl, credentials)
    return response.data
}

export default { login }