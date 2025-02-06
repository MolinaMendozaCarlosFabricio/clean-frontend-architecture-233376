import { Observable } from "rxjs";

export interface ProductUseCase<S, T>{
    execute(params: S): Observable<T>;
}