import { Product, Customer, RequestContext, TransactionalConnection } from '@vendure/core';
import { Favorite } from '../entities/favorite.entity';
export declare class FavoriteEntityResolver {
    private connection;
    constructor(connection: TransactionalConnection);
    product(favorite: Favorite, ctx: RequestContext): Promise<import("@vendure/core").Translated<Product> | undefined>;
    customer(favorite: Favorite, ctx: RequestContext): Promise<Customer>;
}
