import { ListQueryBuilder, Customer } from '@vendure/core';
import { Favorite } from '../entities/favorite.entity';
import { CustomerFavoritesArgs } from '../generated-shop-types';
export declare class CustomerEntityResolver {
    private listQueryBuilder;
    constructor(listQueryBuilder: ListQueryBuilder);
    favorites(customer: Customer, args: CustomerFavoritesArgs): Promise<{
        items: Favorite[];
        totalItems: number;
    }>;
}
