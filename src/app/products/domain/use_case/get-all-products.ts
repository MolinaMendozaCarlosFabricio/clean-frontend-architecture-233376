import { Injectable } from "@angular/core";
import { IProductRepository } from "../repository/Iproduct_repo";
import { Observable } from "rxjs";
import { ProductsModule } from "../../products.module";

@Injectable({
    providedIn: "root"
})
export class GetAllProductsUsecase {
    constructor(product_repository: IProductRepository){}

    /*
    execute(params: void):Observable<ProductsModule>{
        return this.product_repository.getAllProducts();
    }
        */
}