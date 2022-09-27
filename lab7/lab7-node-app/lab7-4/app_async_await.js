const checkAuth = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username == 'wanatthapong' && password == '6220709') {
                console.log('--- checkAuth ---');
                resolve({ authData: username + password });
            } else {
                reject(new Error('Authentication Failed!!'));
            }
        }, 2000);
    });
}

const getStudent = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('--- getStudent ---');
            const data = { name: 'Wanatthapong Wongbuthong', permission: 'Admin' };
            resolve(data);
        }, 3000);
    });
}

const getResult = async() => {
    const auth = await checkAuth('wanatthapong', '6220709');
    const data = await getStudent(auth);
    console.log(data);
}

console.log('--- Start ---');
getResult();
console.log('--- Finish ---');