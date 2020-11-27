"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var FavoritesPlugin_1;
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@vendure/core");
const path_1 = __importDefault(require("path"));
const favorite_entity_1 = require("./entities/favorite.entity");
const api_extensions_1 = require("./api/api-extensions");
const api_extensions_2 = require("./api/api-extensions");
const customer_entity_resolver_1 = require("./api/customer-entity.resolver");
const favorite_entity_resolver_1 = require("./api/favorite-entity.resolver");
const favorite_shop_resolver_1 = require("./api/favorite-shop.resolver");
const constants_1 = require("./constants");
/**
 * A Vendure plugin to give customers the ability to favorite products.
 *
 * @example
 * ```TypeScript
 * export const config: VendureConfig = {
 *   //...
 *   plugins: [
 *     FavoritesPlugin.init({
 *       trackHistory: true
 *     }),
 *   ]
 * }
 * ```
 */
let FavoritesPlugin = FavoritesPlugin_1 = class FavoritesPlugin {
    /**
     * The static `init()` method is a convention used by Vendure plugins which allows options
     * to be configured by the user.
     */
    static init(options) {
        this.options = options;
        return FavoritesPlugin_1;
    }
};
FavoritesPlugin.options = {
    trackHistory: false
};
FavoritesPlugin.uiExtensions = {
    translations: {
        en: path_1.default.join(__dirname, 'ui/translations/en.json'),
        pt_BR: path_1.default.join(__dirname, 'ui/translations/pt_BR.json'),
    },
    extensionPath: path_1.default.join(__dirname, 'ui'),
    ngModules: [
        {
            type: 'shared',
            ngModuleFileName: 'favorites-ui-extension.module.ts',
            ngModuleName: 'FavoritesUiExtensionModule',
        }
    ],
};
FavoritesPlugin = FavoritesPlugin_1 = __decorate([
    core_1.VendurePlugin({
        imports: [core_1.PluginCommonModule],
        entities: [favorite_entity_1.Favorite],
        adminApiExtensions: {
            schema: api_extensions_1.adminApiExtensions,
            resolvers: [customer_entity_resolver_1.CustomerEntityResolver, favorite_entity_resolver_1.FavoriteEntityResolver],
        },
        shopApiExtensions: {
            schema: api_extensions_2.shopApiExtensions,
            resolvers: [customer_entity_resolver_1.CustomerEntityResolver, favorite_entity_resolver_1.FavoriteEntityResolver, favorite_shop_resolver_1.FavoriteShopResolver],
        },
        providers: [
            // By definiting the `PLUGIN_INIT_OPTIONS` symbol as a provider, we can then inject the
            // user-defined options into other classes, such as the {@link ExampleService}.
            { provide: constants_1.PLUGIN_INIT_OPTIONS, useFactory: () => FavoritesPlugin_1.options },
        ],
        configuration: config => {
            config.customFields.Customer.push({
                type: 'boolean',
                name: 'favorites',
                label: [
                    {
                        languageCode: core_1.LanguageCode.en,
                        value: 'Favorites'
                    }
                ],
                public: false,
            });
            return config;
        }
    })
], FavoritesPlugin);
exports.FavoritesPlugin = FavoritesPlugin;
//# sourceMappingURL=plugin.js.map