import { Injectable } from "@angular/core";
import { ProductUseCase } from "../base/use_case";
import { Products } from "../models/products";
import { IProductRepository } from "../repository/Iproduct_repo";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UpdateProductUseCase implements ProductUseCase<Products, string>{
    constructor(private productRepository: IProductRepository){}

    execute(params: Products): Observable<string> {
        return this.productRepository.updateProduct(params);
    }
}