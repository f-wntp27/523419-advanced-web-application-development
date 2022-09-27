const myRequest = (message, callback) => {
    console.log('--- Start ---');
    const response = message + ' done!!';
    const error = undefined;
    setTimeout(() => {
        console.log(result);
        console.log('--- Finish ---');
    }, 2000);
    const result = callback(error, response);
    
}

const myCallback = (error, res) => {
    if (error) {
        return 'Error ' + error;
    } else {
        return res;
    }
}

myRequest('Hello World', myCallback);