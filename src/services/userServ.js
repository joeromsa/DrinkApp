/*
* Services used to communicate with back end realted to sigup data.
*/

import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/users' // change for production

// sends request to create user.
const signup = async crednetials => {
    const response = await axios.post(baseUrl, crednetials)
    return response.data
}

export default {signup}
