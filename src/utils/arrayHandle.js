/* 
* Utility function to combine array.
*/

// takes two arrays and returns the combined result. 
const combineArrs = (ar1, ar2) => {
    ar1.forEach((element, index) => {
        if (typeof ar2[index] === 'undefined')
        {
            ar2[index] = ''
        }

        ar1[index] = ar2[index] + ' ' + element
    });

    return ar1
}

export default combineArrs