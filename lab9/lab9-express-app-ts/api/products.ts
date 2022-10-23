import express, { Request, Response } from 'express';
import authorization from '../config/authorizes';

const router = express.Router();

const products: any[] = [
    {
        type: 'snack',
        id: '100001',
        name: 'Tivoli Combo',
        detail: 'Chocolate Wafer',
        quantity: 50,
        price: 5
    }
];

router.route('/products')
    .get(authorization, (req: Request, res: Response) => {
        res.status(200).json(products);
    });

export default router;