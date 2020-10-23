import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/drinkSearch'

const getDrinks = async searchVal => {

    const request = await axios.get(`${baseUrl}/${searchVal}`)
    return request.data
}

export default { getDrinks }