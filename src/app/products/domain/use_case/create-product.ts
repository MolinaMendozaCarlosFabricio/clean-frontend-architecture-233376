import { Injectable } from "@angular/core";
import { ProductUseCase } from "../base/use_case";
import { Products } from "../models/products";
import { Observable } from "rxjs";
import { IProductRepository } from "../repository/Iproduct_repo";

@Injectable({
    providedIn: "root"
})
export class CreateProductUseCase implements ProductUseCase<Products, string>{
    constructor(private productRepository: IProductRepository){}

    execute(params: Products): Observable<string> {
        return this.productRepository.createProduct(params)
    }
}