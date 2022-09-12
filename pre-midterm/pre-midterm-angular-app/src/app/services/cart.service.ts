import { Injectable } from '@angular/core';
import { productsModel } from '../product.model';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProduct: productsModel = [];
  total: number = 0;

  constructor(private productService: ProductService) { }

  add(p_id: number) {
    if (this.productService.getProd(p_id).quantity <= 0)
      return;

    this.productService.getProd(p_id).quantity -= 1;
    this.cartProduct.push(this.productService.getProd(p_id));
    this.total += this.productService.getProd(p_id).price;
  }

  getCounter() {
    return this.cartProduct.length;
  }

  getCart() {
    return this.cartProduct;
  }
  
  getTotal() {
    return this.total;
  }
}
