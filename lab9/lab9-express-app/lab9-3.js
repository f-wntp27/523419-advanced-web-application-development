const expressFunction = require('express');
const mongoose = require('mongoose');
var app = expressFunction();

const url = 'mongodb://localhost:27017/university';
const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
};

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization');
    return next();
})

app.use(expressFunction.json());
app.use((req, res, next) => {
    mongoose.connect(url, config)
    .then(() => {
        console.log('Connected to MongoDB...');
        next();
    })
    .catch(err => {
        console.log('Cannot connect to MongoDB');
        res.status(501).send('Cannot connect to MongoDB');
    });
})

app.use('/user', require('./routes/user'))
app.use('/login', require('./routes/signin'))
app.use('/api', require('./api/products'))

app.listen(3000, function () {
    console.log('Listening on port 3000');
})