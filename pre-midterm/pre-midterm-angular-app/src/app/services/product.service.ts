import { Injectable } from '@angular/core';
import { productsModel } from '../product.model';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: productsModel = [
    {type: 'CPU', id: '100001', name: 'Intel Core i7 Gen 10th', detail: 'The Intel Core i7-10750H is a high-end processor for laptops with six cores based on the Comet Lake architecture', quantity: 10, price: 10}
  ];
  
  constructor() { }

  getAllProd() {
    return this.products;
  }

  getProd(p_id: number) {
    return this.products[p_id];
  }
  
}
