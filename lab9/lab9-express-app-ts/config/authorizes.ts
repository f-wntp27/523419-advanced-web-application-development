import e, { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const key = 'MY_KEY';

const authorization = ((req: Request, res: Response, next: NextFunction) => {
    const token = req.headers['authorization'];

    if (token === undefined) {
        return res.status(401).json({
            "status": 401,
            "message": "Unauthorized",
        });
    } else {
        jwt.verify(token, key, (err, decode) => {
            if (err) {
                return res.status(401).json({
                    "status": 401,
                    "message": "Unauthorized",
                });
            } else {
                console.log(decode);
                return next();
            }
        })
    }
});

export default authorization;