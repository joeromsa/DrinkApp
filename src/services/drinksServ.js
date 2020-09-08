import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/drinks' // will need to change this for produc.

let token = null

const setToken = newToken => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const config = {
        headers: { Authorization: token },
    }
    const request = await axios.get(baseUrl, config)
    return request.data
}

const create = async newObject => {
    const config = {
        headers: { Authorization: token },
    }
    const response = await axios.post(baseUrl, newObject, config)
    return response.data
}

const remove = async delObjectId => {
    const response = await axios.delete(`${baseUrl}/${delObjectId}`)
    return response.data
}

export default {getAll, create, remove, setToken}