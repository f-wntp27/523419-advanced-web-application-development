import express, { Application, NextFunction, Request, Response} from 'express';
import mongoose, { Schema } from 'mongoose';

var expressApp: Application = express();
const url = 'mongodb://localhost:27017/db_it';
const config = {
    autoIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

const userSchema = new Schema({
    type: String,
    id: String,
    name: String,
    detail: String,
    quantity: String,
    price: Number,
    file: String,
    img: String
}, {
    collection: 'products'
});

let Product: mongoose.Model<any>;
try {
    Product = mongoose.model('products');
} catch (error) {
    Product = mongoose.model('products', userSchema);
}

expressApp.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Option, Authorization');
    return next();
});

expressApp.use(express.json({ limit: '16mb' }));
expressApp.use((req: Request, res: Response, next: NextFunction) => {
    mongoose.connect(url, config)
    .then(() => {
        console.log('Connected to MongoDB');
        return next();
    })
    .catch(err => {
        console.log('Cannot connect to MongoDB');
        res.status(501).send('Cannot connect to MongoDB');
    });
});

const addProduct = (productData: any) => {
    return new Promise<any>((resolve, reject) => {
        var new_product = new Product(
            productData
        );
        new_product.save((err: any, data: any) => {
            if (err) {
                reject(new Error('Cannot insert product to DB!'));
            } else {
                resolve({message: 'Product added successfully'});
            }
        });
    });
}

const getProducts = () => {
    return new Promise<any>((resolve, reject) => {
        Product.find({}, (err: any, data: any) => {
            if (err) {
                reject(new Error('Cannot get products!'));
            } else {
                if (data) {
                    resolve(data);
                } else {
                    reject(new Error('Cannot get products!'));
                }
            }
        });
    });
}

expressApp.post('/products/add', (req: Request, res: Response) => {
    console.log('add');
    addProduct(req.body)
    .then(result => {
        // console.log(result);
        res.status(201).json(result);
    })
    .catch(err => {
        console.log(err);
    });
})

expressApp.get('/products/get', (req: Request, res: Response) => {
    console.log('get');
    getProducts()
    .then(result => {
        // console.log(result);
        res.status(200).json(result);
    })
    .catch(err => {
        console.log(err);
    });
})

expressApp.listen(3000, () => {
    console.log('Listening on port 3000');
})