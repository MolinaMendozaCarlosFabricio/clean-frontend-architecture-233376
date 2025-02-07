import { Injectable } from "@angular/core";
import { IProductRepository } from "../domain/repository/Iproduct_repo";
import { map, Observable } from "rxjs";
import { Products } from "../domain/models/products";
import { HttpClient } from "@angular/common/http";
import { ProductMessageMapperRepository } from "./product-message-mapper";
import { ProductMessageResponse } from "./product-message-response";
import { ProductMapperGetAllResponse } from "./product-maper";
import { ProductGetResponse } from "./product-get-response";

@Injectable({
    providedIn: "root"
})
export class IProductService extends IProductRepository{
    _url: string = "http://localhost:8080/products/";
    mapper_message = new ProductMessageMapperRepository
    mapper_array = new ProductMapperGetAllResponse

    constructor(private _http: HttpClient){
        super();
    }

    override getAllProducts(): Observable<Products[]> {
        return this._http.get<ProductGetResponse>(this._url).pipe(map(this.mapper_array.mapFrom))
    }

    override createProduct(product: Products): Observable<string> {
        return this._http.post<ProductMessageResponse>(this._url, product).pipe(map(this.mapper_message.mapFrom))
    }

    override updateProduct(product: Products): Observable<string> {
        return this._http.put<ProductMessageResponse>(this._url + product.ID, product).pipe(map(this.mapper_message.mapFrom))
    }

    override deleteProduct(id: number): Observable<string> {
        return this._http.delete<ProductMessageResponse>(this._url + id).pipe(map(this.mapper_message.mapFrom))
    }
}