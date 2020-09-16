/*
* Services used to communicate with back end realted to drink data.
*/

import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/drinks' // will need to change this for produc.

let token = null

// creates token to use in header.
const setToken = newToken => {
    token = `bearer ${newToken}`
}

// requests all drinks from the database.
const getAll = async () => {
    const config = {
        headers: { Authorization: token },
    }
    const request = await axios.get(baseUrl, config)
    return request.data
}

// sends request to create a new drink entry in db. 
const create = async newObject => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

// sends request to remove a drink from db. 
const remove = async delObjectId => {
    const response = await axios.delete(`${baseUrl}/${delObjectId}`)
    return response.data
}

export default {getAll, create, remove, setToken}