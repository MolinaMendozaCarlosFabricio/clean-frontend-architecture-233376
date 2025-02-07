import { ProductMapperForArraysRepository } from "../domain/base/mapper_for_arrays";
import { Products } from "../domain/models/products";
import { ProductGetResponse } from "./product-get-response";
export class ProductMapperGetAllResponse extends ProductMapperForArraysRepository<ProductGetResponse, Products>{
    override mapFrom(param: ProductGetResponse): Products[] {
        return param.Response
    }
}