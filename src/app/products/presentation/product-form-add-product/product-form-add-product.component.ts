import { Component, EventEmitter, Output } from '@angular/core';
import { Products } from '../../domain/models/products';
import { CreateProductUseCase } from '../../domain/use_case/create-product';
import { ProductListProductsComponent } from '../product-list-products/product-list-products.component';

@Component({
  selector: 'app-product-form-add-product',
  templateUrl: './product-form-add-product.component.html',
  styleUrl: './product-form-add-product.component.css'
})
export class ProductFormAddProductComponent {
  new_product: Products = {
    ID: 0,
    Name: "",
    Price: 0
  }
  @Output() product_added_event = new EventEmitter<boolean>();

  constructor(
    private createProductUC: CreateProductUseCase,
  ){}

  add(){
    this.createProductUC.execute(this.new_product).subscribe(
      response => {
        console.log(response);
      },
      error => console.log("Error:", error)
    )
    this.new_product = {
      ID: 0,
      Name: "",
      Price: 0
    };
  }
}
