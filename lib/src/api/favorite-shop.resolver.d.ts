import { ListQueryBuilder, RequestContext, CustomerService, ProductService, TransactionalConnection } from '@vendure/core';
import { HistoryService } from '@vendure/core/dist/service/services/history.service';
import { PluginInitOptions } from '../types';
export declare class FavoriteShopResolver {
    private connection;
    private options;
    private listQueryBuilder;
    private customerService;
    private productService;
    private historyService;
    constructor(connection: TransactionalConnection, options: PluginInitOptions, listQueryBuilder: ListQueryBuilder, customerService: CustomerService, productService: ProductService, historyService: HistoryService);
    toggleFavorite(ctx: RequestContext, args: any): Promise<string>;
    isFavorite(ctx: RequestContext, args: any): Promise<boolean>;
    /**
     * Returns the Customer entity associated with the current user.
     */
    private getCustomerForOwner;
}
