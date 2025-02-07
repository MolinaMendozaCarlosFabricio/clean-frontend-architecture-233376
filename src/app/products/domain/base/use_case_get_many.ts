import { Observable } from "rxjs";

export interface ProductUseCaseGetMany<S, T>{
    execute(params: S): Observable<T[]>;
}