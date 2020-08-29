import React from 'react'

// componets
import Name from './Name'

const List = ({results}) => {
    if (results === null || results === '') {
        return <p>No Result</p>
    }
    else 
    {
        return (
            <div>
                {results.map(item => <Name key={item.idDrink} item={item} />)}
            </div>
        )
    }
}

export default List