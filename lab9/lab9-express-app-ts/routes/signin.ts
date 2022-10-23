import express, { Request, Response } from 'express';
import mongoose, { Schema } from 'mongoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import { IUser } from '../interfaces/user';

const router = express.Router();

const key = 'MY_KEY';

const userSchema = new Schema<IUser>({
    username: String,
    password: String,
}, {
    collection: 'users'
});

let User: mongoose.Model<IUser>;
try {
    User = mongoose.model<IUser>('users');
} catch (error) {
    User = mongoose.model<IUser>('users', userSchema);
}

const compareHash: any = async (plainText: string, hastText: string) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(plainText, hastText, (err, data) => {
            if (err) {
                reject(new Error('Error bcrypt compare'));
            } else {
                resolve({ status: data });
            }
        });
    });
}

const findUser = (username: string) => {
    return new Promise<any>((resolve, reject) => {
        User.findOne({ username: username }, (err: any, data: any) => {
            if (err) {
                reject(new Error('Cannot find username!'));
            } else {
                if (data) {
                    resolve({
                        id: data._id,
                        username: data.username,
                        password: data.password
                    });
                } else {
                    reject(new Error('Cannot find username!'));
                }
            }
        });
    });
}

router.route('/signin').post(async (req: Request, res: Response) => {
    const payload: IUser = {
        username: req.body.username,
        password: req.body.password,
    }
    console.log(payload);
    
    try {
        const result = await findUser(payload.username);
        const loginStatus = await compareHash(payload.password, result.password);
        const status = loginStatus.status;

        if (status) {
            const token = jwt.sign(result, key, { expiresIn: 60*5 });
            res.status(200).json({ result, token, status });
        } else {
            res.status(200).json({ status });
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

export default router;
