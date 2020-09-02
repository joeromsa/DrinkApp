import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/drinks' // will need to change this for produc.

const getAll = async () => {
    const request = await axios.get(baseUrl)
    return request.data
}

const create = async newObject => {
    const response = await axios.post(baseUrl, newObject)
    return response.data
}

export default {getAll, create}