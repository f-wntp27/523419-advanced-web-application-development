import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
  }

  getAllProduct() {
    return this.productService.getAllProduct();
  }

  addToCart(p_id: number) {
    this.cartService.addToCart(p_id);
  }
}
