import { Injectable } from "@angular/core";
import { ProductUseCase } from "../base/use_case";
import { IProductRepository } from "../repository/Iproduct_repo";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class DeleteProductUseCase implements ProductUseCase<number, string>{
    constructor(private productRepository: IProductRepository){}

    execute(params: number): Observable<string> {
        return this.productRepository.deleteProduct(params)
    }
}