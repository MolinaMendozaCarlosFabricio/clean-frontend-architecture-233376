import { Component, Input } from '@angular/core';
import { Products } from '../../domain/models/products';
import { UpdateProductUseCase } from '../../domain/use_case/update-product';

@Component({
  selector: 'app-product-form-edit-product',
  templateUrl: './product-form-edit-product.component.html',
  styleUrl: './product-form-edit-product.component.css'
})
export class ProductFormEditProductComponent {
  edited_product: Products = {
    ID: 0,
    Name: "",
    Price: 0
  }
  @Input() id: number = 0;

  constructor(private updateProductUC: UpdateProductUseCase){}

  edit(){
    this.edited_product.ID = this.id;
    this.updateProductUC.execute(this.edited_product).subscribe(
      response => {
        console.log(response);
      },
      error => console.log("Error: ", error)
    )
    this.edited_product = {
      ID: 0,
      Name: "",
      Price: 0
    }
  }
}
