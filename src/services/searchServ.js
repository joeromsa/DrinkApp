import axios from 'axios'

const getDrinks = async searchVal => {
    const request = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchVal}`)
    return request.data
}

export default { getDrinks }