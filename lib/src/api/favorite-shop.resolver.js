"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("@nestjs/graphql");
const core_1 = require("@vendure/core");
const common_1 = require("@nestjs/common");
const favorite_entity_1 = require("../entities/favorite.entity");
const history_service_1 = require("@vendure/core/dist/service/services/history.service");
const generated_types_1 = require("@vendure/common/lib/generated-types");
const constants_1 = require("../constants");
const core_2 = require("@vendure/core");
let FavoriteShopResolver = class FavoriteShopResolver {
    constructor(connection, options, listQueryBuilder, customerService, productService, historyService) {
        this.connection = connection;
        this.options = options;
        this.listQueryBuilder = listQueryBuilder;
        this.customerService = customerService;
        this.productService = productService;
        this.historyService = historyService;
    }
    async toggleFavorite(ctx, args) {
        const favoriteRepo = this.connection.getRepository(ctx, favorite_entity_1.Favorite);
        const customerId = await (await this.getCustomerForOwner(ctx)).id;
        const { productId } = args;
        const favorite = await favoriteRepo.findOne({
            where: {
                product: { id: productId },
                customer: { id: customerId }
            },
            relations: ['customer', 'product'],
        });
        if (favorite) {
            await favoriteRepo.remove(favorite);
        }
        else {
            await favoriteRepo.insert({
                customer: { id: customerId },
                product: { id: productId }
            });
        }
        if (this.options.trackHistory) {
            let productName = favorite === null || favorite === void 0 ? void 0 : favorite.product.name;
            if (!productName) {
                const res = await this.productService.findOne(ctx, productId);
                productName = res === null || res === void 0 ? void 0 : res.name;
            }
            const note = favorite ? `removed ${productName} from` : `added ${productName} to`;
            this.historyService.createHistoryEntryForCustomer({
                ctx,
                customerId,
                type: generated_types_1.HistoryEntryType.CUSTOMER_NOTE,
                data: {
                    note: `Customer ${note} favorites.`,
                },
            }, false);
        }
        return this.listQueryBuilder
            .build(favorite_entity_1.Favorite, args.options || undefined, {
            relations: ['product'],
            where: { customer: { id: customerId } }
        })
            .getManyAndCount()
            .then(([items, totalItems]) => ({
            items,
            totalItems,
        }));
    }
    /**
     * Returns the Customer entity associated with the current user.
     */
    async getCustomerForOwner(ctx) {
        const userId = ctx.activeUserId;
        if (!userId) {
            throw new core_1.ForbiddenError();
        }
        const customer = await this.customerService.findOneByUserId(ctx, userId);
        if (!customer) {
            throw new core_1.InternalServerError(`error.no-customer-found-for-current-user`);
        }
        return customer;
    }
};
__decorate([
    core_2.Transaction(),
    graphql_1.Mutation(),
    core_1.Allow(core_1.Permission.Owner),
    __param(0, core_1.Ctx()),
    __param(1, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [core_1.RequestContext, Object]),
    __metadata("design:returntype", Promise)
], FavoriteShopResolver.prototype, "toggleFavorite", null);
FavoriteShopResolver = __decorate([
    graphql_1.Resolver(),
    __param(1, common_1.Inject(constants_1.PLUGIN_INIT_OPTIONS)),
    __metadata("design:paramtypes", [core_1.TransactionalConnection, Object, core_1.ListQueryBuilder,
        core_1.CustomerService,
        core_1.ProductService,
        history_service_1.HistoryService])
], FavoriteShopResolver);
exports.FavoriteShopResolver = FavoriteShopResolver;
//# sourceMappingURL=favorite-shop.resolver.js.map