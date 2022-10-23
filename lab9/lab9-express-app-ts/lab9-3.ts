import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';

import userRoutes from './routes/user';
import signinRoutes from './routes/signin';
import apiProducts from './api/products';

const expressApp = express();

const url = 'mongodb://localhost:27017/university';
const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

expressApp.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization');
    return next();
});

expressApp.use(express.json());
expressApp.use((req: Request, res: Response, next: NextFunction) => {
    mongoose.connect(url, config)
    .then(() => {
        console.log('Connected to MongoDB...');
        return next();
    })
    .catch(() => {
        console.log('Cannot connect to MongoDB');
        res.status(501).send('Cannot connect to MongoDB');
    })
});

expressApp.use('/user', userRoutes);
expressApp.use('/login', signinRoutes);
expressApp.use('/api', apiProducts);

expressApp.listen(3000, () => {
    console.log('Listening on port 3000');
})