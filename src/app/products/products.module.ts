import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductMainPageComponent } from './presentation/product-main-page/product-main-page.component';
import { ProductListProductsComponent } from './presentation/product-list-products/product-list-products.component';
import { ProductFormAddProductComponent } from './presentation/product-form-add-product/product-form-add-product.component';
import { ProductFormEditProductComponent } from './presentation/product-form-edit-product/product-form-edit-product.component';
import { ProductItemProductComponent } from './presentation/product-item-product/product-item-product.component';
import { IProductRepository } from './domain/repository/Iproduct_repo';
import { IProductService } from './infraestructure/product-api';
import { FormsModule } from '@angular/forms';



@NgModule({
  providers: [
    { provide: IProductRepository, useClass: IProductService }
  ],
  declarations: [
    ProductMainPageComponent,
    ProductListProductsComponent,
    ProductFormAddProductComponent,
    ProductFormEditProductComponent,
    ProductItemProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProductMainPageComponent
  ]
})
export class ProductsModule { }
