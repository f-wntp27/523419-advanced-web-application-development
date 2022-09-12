import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  getAllProd() {
    return this.productService.getAllProd();
  }

  addToCart(p_id: number) {
    this.cartService.add(p_id);
  }

}
