export abstract class ProductMapperForArraysRepository<I, O>{
    abstract mapFrom(param: I):O[];
}