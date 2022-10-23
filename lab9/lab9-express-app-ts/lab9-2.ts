import jwt from 'jsonwebtoken';

const payload = {
    stdid: 'B6220709',
    name: 'Wanatthapong Wongbuthong',
    major: 'CPE'
}

const key = 'MY_KEY';
const token = jwt.sign(payload, key, { expiresIn: 60*5 });
console.log(token);

try {
    const dataInToken = jwt.verify(token, key);
    console.log(dataInToken);
} catch (error) {
    console.log(error);
}