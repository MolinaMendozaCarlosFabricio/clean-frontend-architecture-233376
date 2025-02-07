import { ProductMapperRepository } from "../domain/base/mapper";
import { ProductMessageResponse } from "./product-message-response";

export class ProductMessageMapperRepository extends ProductMapperRepository<ProductMessageResponse, string>{
    override mapFrom(param: ProductMessageResponse): string {
        return param.Message
    }

    override mapTo(param: string): ProductMessageResponse {
        return {
            Message: param
        }
    }
}