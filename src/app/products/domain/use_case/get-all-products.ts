import { Injectable } from "@angular/core";
import { IProductRepository } from "../repository/Iproduct_repo";
import { Observable } from "rxjs";
import { ProductsModule } from "../../products.module";
import { Products } from "../models/products";
import { ProductUseCaseGetMany } from "../base/use_case_get_many";

@Injectable({
    providedIn: "root"
})
export class GetAllProductsUsecase implements ProductUseCaseGetMany<void, Products> {
    constructor(private productRepository: IProductRepository){}

    execute(params: void): Observable<Products[]> {
        return this.productRepository.getAllProducts();
    }
}