import { Observable } from "rxjs";
import { Products } from "../models/products";

export abstract class IProductRepository {
    abstract getAllProducts():Observable<Products[]>
    abstract createProduct(product: Products):Observable<string>
    abstract updateProduct(product: Products):Observable<string>
    abstract deleteProduct(id: number):Observable<string>
}