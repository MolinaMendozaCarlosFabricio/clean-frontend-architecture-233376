export abstract class ProductMapperRepository<I, O>{
    abstract mapFrom(param: I):O;

    abstract mapTo(param: O): I;
}