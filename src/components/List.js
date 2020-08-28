import React from 'react'

// componets
import Name from './Name'

const List = ({results}) => {
    if (results === null) {
        return <p></p>
    }
    if (results.length === 25 && results[0].strDrink === "GG")
    {
        return <p></p>
    }
    else 
    {
        return (
            <ul>
                {results.map(item => <Name key={item.idDrink} item={item} />)}
            </ul>
        )
    }
}

export default List