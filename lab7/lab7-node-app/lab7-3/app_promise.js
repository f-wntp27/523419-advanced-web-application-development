const p = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let sid = 'B6220709';
        if (sid) {
            resolve({ id: sid, name: 'Wanatthapong' });
        } else {
            reject(new Error('Error 404 Not Found'));
        }
    }, 1000);
});

p.then(result => {
    console.log(result);
})
.catch(err => {
    console.error(err);
})