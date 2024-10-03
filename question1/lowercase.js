// Question 1

function lowerCaseWords(array) {
    return new Promise((resolve, reject) => {
        try {
            const lowerCasedWords = array
                .filter(word => typeof word === 'string')
                .map(word => word.toLowerCase());
            console.log(lowerCasedWords)
            resolve('Promise resolved');
        } catch (error) {
            reject(error);
        }
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings']

console.log(lowerCaseWords(mixedArray))
