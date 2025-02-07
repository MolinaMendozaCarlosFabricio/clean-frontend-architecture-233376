import { Component, OnInit } from '@angular/core';
import { Products } from '../../domain/models/products';
import { GetAllProductsUsecase } from '../../domain/use_case/get-all-products';


@Component({
  selector: 'app-product-list-products',
  templateUrl: './product-list-products.component.html',
  styleUrl: './product-list-products.component.css'
})
export class ProductListProductsComponent implements OnInit {
  list_products: Products[] = [];

  constructor(private getAllProductUC: GetAllProductsUsecase){}

  getList(){
    this.getAllProductUC.execute().subscribe(
      response => {
        console.log("Respuesta correcta del servidor");
        this.list_products = response;
      },
      error => console.log("Error:", error)
    );
  }

  ngOnInit(): void {
      this.getList();
  }
}
