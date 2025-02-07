import { Component, Input } from '@angular/core';
import { Products } from '../../domain/models/products';
import { DeleteProductUseCase } from '../../domain/use_case/delete-product';

@Component({
  selector: 'app-product-item-product',
  templateUrl: './product-item-product.component.html',
  styleUrl: './product-item-product.component.css'
})
export class ProductItemProductComponent {
  @Input() product_item: Products = {
    ID: 0,
    Name: "",
    Price: 0
  };
  is_editing: boolean = false;

  constructor(private deleteProductUC: DeleteProductUseCase){}

  delete(){
    this.deleteProductUC.execute(this.product_item.ID).subscribe(
      response => {
        console.log(response)
      },
      error => console.log("Error:", error)
    )
  }

  edit(){
    if(this.is_editing)
      this.is_editing = false
    else
      this.is_editing = true
  }
}
