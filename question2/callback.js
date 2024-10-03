// Question 2

const resolvedPromise = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ 'message': 'delayed success!' });
        }, 500);
    });
};


const rejectedPromise = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('error: delayed exception!'));
        }, 500);
    });
};

resolvedPromise()
    .then((result) => {
        console.log(result)
    })

rejectedPromise()
    .then((result) => {
        console.log(result)
})
    .catch((error) => {
    console.error(error.message);
});
