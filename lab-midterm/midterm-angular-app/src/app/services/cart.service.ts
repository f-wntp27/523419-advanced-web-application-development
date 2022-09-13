import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartProduct: productsModel = [];
  total: number = 0

  constructor(private productService: ProductService) { }

  addToCart(p_id: number) {
    if (this.productService.getSomeProduct(p_id).quantity <= 0) return;
    
    this.cartProduct.push(this.productService.getSomeProduct(p_id));
    this.productService.getSomeProduct(p_id).quantity--;
    this.total += this.productService.getSomeProduct(p_id).price;
  }

  getCart() {
    return this.cartProduct;
  }

  getTotal() {
    return this.total;
  }

  getCounter() {
    return this.cartProduct.length;
  }

}
