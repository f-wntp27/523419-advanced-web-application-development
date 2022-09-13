import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    type: new FormControl('', [Validators.required]),
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    detail: new FormControl('', [Validators.required]),
    quantity: new FormControl('', [Validators.required, Validators.min(1), Validators.max(50)]),
    price: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100000)]),
  });

  productType: string[] = ['CPU','RAM','HDD','Mainboard'];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }

  addProduct(){
    if (this.productForm.status === "INVALID") {
      alert("Add product to database failed");
      return;
    }
    this.productService.getAllProduct().push({
      type: this.productForm.value.type as string,
      id: this.productForm.value.id as string,
      name: this.productForm.value.name as string,
      detail: this.productForm.value.detail as string,
      quantity: Number(this.productForm.value.quantity),
      price: Number(this.productForm.value.price)
    })
    alert("Add product to database successfully");
  }

}
