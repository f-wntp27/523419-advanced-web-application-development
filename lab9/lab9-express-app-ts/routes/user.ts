import express, { Request, Response} from 'express';
import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcryptjs';

import { IUser } from '../interfaces/user';

const router = express.Router();

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

const makeHash = async (plainText: string) => {
    const result = await bcrypt.hash(plainText, 10);
    return result;
}

const insertUser = (dataUser: IUser) => {
    return new Promise<any>((resolve, reject) => {
        var new_user = new User({
            username: dataUser.username,
            password: dataUser.password
        });
        new_user.save((err, data) => {
            if (err) {
                reject(new Error('Cannot insert user to DB!'));
            } else {
                resolve({ message: 'Sign up successfully'});
            }
        });
    });
}

router.route('/signup').post((req: Request, res: Response) => {
    makeHash(req.body.password)
    .then(hashText => {
        const payload = {
            username: req.body.username,
            password: hashText,
        }
        console.log(payload);
        
        insertUser(payload)
        .then(result => {
            console.log(result);
            res.status(201).json(result);
        })
        .catch(err => {
            console.log(err);
        });
    })
    .catch(err => {
        console.log(err);
    });
});

export default router;