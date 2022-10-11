const expressFunction = require('express');
const router = expressFunction.Router();
const authorization = require('../config/authorize');

const products = [
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
    .get(authorization, (req, res) => {
        res.status(200).json(products);
    });

module.exports = router;