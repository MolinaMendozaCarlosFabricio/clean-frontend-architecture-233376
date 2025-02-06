import { Injectable } from "@angular/core";
import { IProductRepository } from "../domain/repository/Iproduct_repo";
import { Observable } from "rxjs";
import { Products } from "../domain/models/products";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: "root"
})
export class IProductService extends IProductRepository{
    _url: string = "http://localhost:8080/products/";

    constructor(private _http: HttpClient){
        super();
    }

    override getAllProducts(): Observable<Products[]> {
        return this._http.get<Products[]>(this._url)
    }

    override createProduct(product: Products): Observable<string> {
        return this._http.post<string>(this._url, product)
    }

    override updateProduct(product: Products): Observable<string> {
        return this._http.put<string>(this._url + product.ID, product)
    }

    override deleteProduct(id: number): Observable<string> {
        return this._http.delete<string>(this._url + id)
    }
}