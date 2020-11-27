export declare type Maybe<T> = T | null;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
    DateTime: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};
export declare type Address = Node & {
    __typename?: 'Address';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    fullName?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    streetLine1: Scalars['String'];
    streetLine2?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    country: Country;
    phoneNumber?: Maybe<Scalars['String']>;
    defaultShippingAddress?: Maybe<Scalars['Boolean']>;
    defaultBillingAddress?: Maybe<Scalars['Boolean']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type Adjustment = {
    __typename?: 'Adjustment';
    adjustmentSource: Scalars['String'];
    type: AdjustmentType;
    description: Scalars['String'];
    amount: Scalars['Int'];
};
export declare enum AdjustmentType {
    Tax = "TAX",
    Promotion = "PROMOTION",
    Shipping = "SHIPPING",
    Refund = "REFUND",
    TaxRefund = "TAX_REFUND",
    PromotionRefund = "PROMOTION_REFUND",
    ShippingRefund = "SHIPPING_REFUND"
}
export declare type Administrator = Node & {
    __typename?: 'Administrator';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    emailAddress: Scalars['String'];
    user: User;
};
export declare type AdministratorList = PaginatedList & {
    __typename?: 'AdministratorList';
    items: Array<Administrator>;
    totalItems: Scalars['Int'];
};
export declare type Asset = Node & {
    __typename?: 'Asset';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    name: Scalars['String'];
    type: AssetType;
    fileSize: Scalars['Int'];
    mimeType: Scalars['String'];
    width: Scalars['Int'];
    height: Scalars['Int'];
    source: Scalars['String'];
    preview: Scalars['String'];
    focalPoint?: Maybe<Coordinate>;
};
export declare type AssetList = PaginatedList & {
    __typename?: 'AssetList';
    items: Array<Asset>;
    totalItems: Scalars['Int'];
};
export declare enum AssetType {
    Image = "IMAGE",
    Video = "VIDEO",
    Binary = "BINARY"
}
export declare type AuthenticationInput = {
    native?: Maybe<NativeAuthInput>;
};
export declare type AuthenticationMethod = Node & {
    __typename?: 'AuthenticationMethod';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    strategy: Scalars['String'];
};
export declare type BooleanCustomFieldConfig = CustomField & {
    __typename?: 'BooleanCustomFieldConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
};
export declare type BooleanOperators = {
    eq?: Maybe<Scalars['Boolean']>;
};
export declare type Cancellation = Node & StockMovement & {
    __typename?: 'Cancellation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    productVariant: ProductVariant;
    type: StockMovementType;
    quantity: Scalars['Int'];
    orderLine: OrderLine;
};
export declare type Channel = Node & {
    __typename?: 'Channel';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    code: Scalars['String'];
    token: Scalars['String'];
    defaultTaxZone?: Maybe<Zone>;
    defaultShippingZone?: Maybe<Zone>;
    defaultLanguageCode: LanguageCode;
    currencyCode: CurrencyCode;
    pricesIncludeTax: Scalars['Boolean'];
};
export declare type Collection = Node & {
    __typename?: 'Collection';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode?: Maybe<LanguageCode>;
    name: Scalars['String'];
    slug: Scalars['String'];
    breadcrumbs: Array<CollectionBreadcrumb>;
    position: Scalars['Int'];
    description: Scalars['String'];
    featuredAsset?: Maybe<Asset>;
    assets: Array<Asset>;
    parent?: Maybe<Collection>;
    children?: Maybe<Array<Collection>>;
    filters: Array<ConfigurableOperation>;
    translations: Array<CollectionTranslation>;
    productVariants: ProductVariantList;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CollectionProductVariantsArgs = {
    options?: Maybe<ProductVariantListOptions>;
};
export declare type CollectionBreadcrumb = {
    __typename?: 'CollectionBreadcrumb';
    id: Scalars['ID'];
    name: Scalars['String'];
    slug: Scalars['String'];
};
export declare type CollectionFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    languageCode?: Maybe<StringOperators>;
    name?: Maybe<StringOperators>;
    slug?: Maybe<StringOperators>;
    position?: Maybe<NumberOperators>;
    description?: Maybe<StringOperators>;
};
export declare type CollectionList = PaginatedList & {
    __typename?: 'CollectionList';
    items: Array<Collection>;
    totalItems: Scalars['Int'];
};
export declare type CollectionListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<CollectionSortParameter>;
    filter?: Maybe<CollectionFilterParameter>;
};
export declare type CollectionSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    slug?: Maybe<SortOrder>;
    position?: Maybe<SortOrder>;
    description?: Maybe<SortOrder>;
};
export declare type CollectionTranslation = {
    __typename?: 'CollectionTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    slug: Scalars['String'];
    description: Scalars['String'];
};
export declare type ConfigArg = {
    __typename?: 'ConfigArg';
    name: Scalars['String'];
    type: Scalars['String'];
    value: Scalars['String'];
};
export declare type ConfigArgDefinition = {
    __typename?: 'ConfigArgDefinition';
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    config?: Maybe<Scalars['JSON']>;
};
export declare type ConfigArgInput = {
    name: Scalars['String'];
    type: Scalars['String'];
    value: Scalars['String'];
};
export declare type ConfigurableOperation = {
    __typename?: 'ConfigurableOperation';
    code: Scalars['String'];
    args: Array<ConfigArg>;
};
export declare type ConfigurableOperationDefinition = {
    __typename?: 'ConfigurableOperationDefinition';
    code: Scalars['String'];
    args: Array<ConfigArgDefinition>;
    description: Scalars['String'];
};
export declare type ConfigurableOperationInput = {
    code: Scalars['String'];
    arguments: Array<ConfigArgInput>;
};
export declare type Coordinate = {
    __typename?: 'Coordinate';
    x: Scalars['Float'];
    y: Scalars['Float'];
};
export declare type Country = Node & {
    __typename?: 'Country';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    code: Scalars['String'];
    name: Scalars['String'];
    enabled: Scalars['Boolean'];
    translations: Array<CountryTranslation>;
};
export declare type CountryList = PaginatedList & {
    __typename?: 'CountryList';
    items: Array<Country>;
    totalItems: Scalars['Int'];
};
export declare type CountryTranslation = {
    __typename?: 'CountryTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
};
export declare type CreateAddressInput = {
    fullName?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    streetLine1: Scalars['String'];
    streetLine2?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    countryCode: Scalars['String'];
    phoneNumber?: Maybe<Scalars['String']>;
    defaultShippingAddress?: Maybe<Scalars['Boolean']>;
    defaultBillingAddress?: Maybe<Scalars['Boolean']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CreateCustomerInput = {
    title?: Maybe<Scalars['String']>;
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    phoneNumber?: Maybe<Scalars['String']>;
    emailAddress: Scalars['String'];
    customFields?: Maybe<Scalars['JSON']>;
};
/**
 * @description
 * ISO 4217 currency code
 *
 * @docsCategory common
 */
export declare enum CurrencyCode {
    /** United Arab Emirates dirham */
    Aed = "AED",
    /** Afghan afghani */
    Afn = "AFN",
    /** Albanian lek */
    All = "ALL",
    /** Armenian dram */
    Amd = "AMD",
    /** Netherlands Antillean guilder */
    Ang = "ANG",
    /** Angolan kwanza */
    Aoa = "AOA",
    /** Argentine peso */
    Ars = "ARS",
    /** Australian dollar */
    Aud = "AUD",
    /** Aruban florin */
    Awg = "AWG",
    /** Azerbaijani manat */
    Azn = "AZN",
    /** Bosnia and Herzegovina convertible mark */
    Bam = "BAM",
    /** Barbados dollar */
    Bbd = "BBD",
    /** Bangladeshi taka */
    Bdt = "BDT",
    /** Bulgarian lev */
    Bgn = "BGN",
    /** Bahraini dinar */
    Bhd = "BHD",
    /** Burundian franc */
    Bif = "BIF",
    /** Bermudian dollar */
    Bmd = "BMD",
    /** Brunei dollar */
    Bnd = "BND",
    /** Boliviano */
    Bob = "BOB",
    /** Brazilian real */
    Brl = "BRL",
    /** Bahamian dollar */
    Bsd = "BSD",
    /** Bhutanese ngultrum */
    Btn = "BTN",
    /** Botswana pula */
    Bwp = "BWP",
    /** Belarusian ruble */
    Byn = "BYN",
    /** Belize dollar */
    Bzd = "BZD",
    /** Canadian dollar */
    Cad = "CAD",
    /** Congolese franc */
    Cdf = "CDF",
    /** Swiss franc */
    Chf = "CHF",
    /** Chilean peso */
    Clp = "CLP",
    /** Renminbi (Chinese) yuan */
    Cny = "CNY",
    /** Colombian peso */
    Cop = "COP",
    /** Costa Rican colon */
    Crc = "CRC",
    /** Cuban convertible peso */
    Cuc = "CUC",
    /** Cuban peso */
    Cup = "CUP",
    /** Cape Verde escudo */
    Cve = "CVE",
    /** Czech koruna */
    Czk = "CZK",
    /** Djiboutian franc */
    Djf = "DJF",
    /** Danish krone */
    Dkk = "DKK",
    /** Dominican peso */
    Dop = "DOP",
    /** Algerian dinar */
    Dzd = "DZD",
    /** Egyptian pound */
    Egp = "EGP",
    /** Eritrean nakfa */
    Ern = "ERN",
    /** Ethiopian birr */
    Etb = "ETB",
    /** Euro */
    Eur = "EUR",
    /** Fiji dollar */
    Fjd = "FJD",
    /** Falkland Islands pound */
    Fkp = "FKP",
    /** Pound sterling */
    Gbp = "GBP",
    /** Georgian lari */
    Gel = "GEL",
    /** Ghanaian cedi */
    Ghs = "GHS",
    /** Gibraltar pound */
    Gip = "GIP",
    /** Gambian dalasi */
    Gmd = "GMD",
    /** Guinean franc */
    Gnf = "GNF",
    /** Guatemalan quetzal */
    Gtq = "GTQ",
    /** Guyanese dollar */
    Gyd = "GYD",
    /** Hong Kong dollar */
    Hkd = "HKD",
    /** Honduran lempira */
    Hnl = "HNL",
    /** Croatian kuna */
    Hrk = "HRK",
    /** Haitian gourde */
    Htg = "HTG",
    /** Hungarian forint */
    Huf = "HUF",
    /** Indonesian rupiah */
    Idr = "IDR",
    /** Israeli new shekel */
    Ils = "ILS",
    /** Indian rupee */
    Inr = "INR",
    /** Iraqi dinar */
    Iqd = "IQD",
    /** Iranian rial */
    Irr = "IRR",
    /** Icelandic króna */
    Isk = "ISK",
    /** Jamaican dollar */
    Jmd = "JMD",
    /** Jordanian dinar */
    Jod = "JOD",
    /** Japanese yen */
    Jpy = "JPY",
    /** Kenyan shilling */
    Kes = "KES",
    /** Kyrgyzstani som */
    Kgs = "KGS",
    /** Cambodian riel */
    Khr = "KHR",
    /** Comoro franc */
    Kmf = "KMF",
    /** North Korean won */
    Kpw = "KPW",
    /** South Korean won */
    Krw = "KRW",
    /** Kuwaiti dinar */
    Kwd = "KWD",
    /** Cayman Islands dollar */
    Kyd = "KYD",
    /** Kazakhstani tenge */
    Kzt = "KZT",
    /** Lao kip */
    Lak = "LAK",
    /** Lebanese pound */
    Lbp = "LBP",
    /** Sri Lankan rupee */
    Lkr = "LKR",
    /** Liberian dollar */
    Lrd = "LRD",
    /** Lesotho loti */
    Lsl = "LSL",
    /** Libyan dinar */
    Lyd = "LYD",
    /** Moroccan dirham */
    Mad = "MAD",
    /** Moldovan leu */
    Mdl = "MDL",
    /** Malagasy ariary */
    Mga = "MGA",
    /** Macedonian denar */
    Mkd = "MKD",
    /** Myanmar kyat */
    Mmk = "MMK",
    /** Mongolian tögrög */
    Mnt = "MNT",
    /** Macanese pataca */
    Mop = "MOP",
    /** Mauritanian ouguiya */
    Mru = "MRU",
    /** Mauritian rupee */
    Mur = "MUR",
    /** Maldivian rufiyaa */
    Mvr = "MVR",
    /** Malawian kwacha */
    Mwk = "MWK",
    /** Mexican peso */
    Mxn = "MXN",
    /** Malaysian ringgit */
    Myr = "MYR",
    /** Mozambican metical */
    Mzn = "MZN",
    /** Namibian dollar */
    Nad = "NAD",
    /** Nigerian naira */
    Ngn = "NGN",
    /** Nicaraguan córdoba */
    Nio = "NIO",
    /** Norwegian krone */
    Nok = "NOK",
    /** Nepalese rupee */
    Npr = "NPR",
    /** New Zealand dollar */
    Nzd = "NZD",
    /** Omani rial */
    Omr = "OMR",
    /** Panamanian balboa */
    Pab = "PAB",
    /** Peruvian sol */
    Pen = "PEN",
    /** Papua New Guinean kina */
    Pgk = "PGK",
    /** Philippine peso */
    Php = "PHP",
    /** Pakistani rupee */
    Pkr = "PKR",
    /** Polish złoty */
    Pln = "PLN",
    /** Paraguayan guaraní */
    Pyg = "PYG",
    /** Qatari riyal */
    Qar = "QAR",
    /** Romanian leu */
    Ron = "RON",
    /** Serbian dinar */
    Rsd = "RSD",
    /** Russian ruble */
    Rub = "RUB",
    /** Rwandan franc */
    Rwf = "RWF",
    /** Saudi riyal */
    Sar = "SAR",
    /** Solomon Islands dollar */
    Sbd = "SBD",
    /** Seychelles rupee */
    Scr = "SCR",
    /** Sudanese pound */
    Sdg = "SDG",
    /** Swedish krona/kronor */
    Sek = "SEK",
    /** Singapore dollar */
    Sgd = "SGD",
    /** Saint Helena pound */
    Shp = "SHP",
    /** Sierra Leonean leone */
    Sll = "SLL",
    /** Somali shilling */
    Sos = "SOS",
    /** Surinamese dollar */
    Srd = "SRD",
    /** South Sudanese pound */
    Ssp = "SSP",
    /** São Tomé and Príncipe dobra */
    Stn = "STN",
    /** Salvadoran colón */
    Svc = "SVC",
    /** Syrian pound */
    Syp = "SYP",
    /** Swazi lilangeni */
    Szl = "SZL",
    /** Thai baht */
    Thb = "THB",
    /** Tajikistani somoni */
    Tjs = "TJS",
    /** Turkmenistan manat */
    Tmt = "TMT",
    /** Tunisian dinar */
    Tnd = "TND",
    /** Tongan paʻanga */
    Top = "TOP",
    /** Turkish lira */
    Try = "TRY",
    /** Trinidad and Tobago dollar */
    Ttd = "TTD",
    /** New Taiwan dollar */
    Twd = "TWD",
    /** Tanzanian shilling */
    Tzs = "TZS",
    /** Ukrainian hryvnia */
    Uah = "UAH",
    /** Ugandan shilling */
    Ugx = "UGX",
    /** United States dollar */
    Usd = "USD",
    /** Uruguayan peso */
    Uyu = "UYU",
    /** Uzbekistan som */
    Uzs = "UZS",
    /** Venezuelan bolívar soberano */
    Ves = "VES",
    /** Vietnamese đồng */
    Vnd = "VND",
    /** Vanuatu vatu */
    Vuv = "VUV",
    /** Samoan tala */
    Wst = "WST",
    /** CFA franc BEAC */
    Xaf = "XAF",
    /** East Caribbean dollar */
    Xcd = "XCD",
    /** CFA franc BCEAO */
    Xof = "XOF",
    /** CFP franc (franc Pacifique) */
    Xpf = "XPF",
    /** Yemeni rial */
    Yer = "YER",
    /** South African rand */
    Zar = "ZAR",
    /** Zambian kwacha */
    Zmw = "ZMW",
    /** Zimbabwean dollar */
    Zwl = "ZWL"
}
export declare type CurrentUser = {
    __typename?: 'CurrentUser';
    id: Scalars['ID'];
    identifier: Scalars['String'];
    channels: Array<CurrentUserChannel>;
};
export declare type CurrentUserChannel = {
    __typename?: 'CurrentUserChannel';
    id: Scalars['ID'];
    token: Scalars['String'];
    code: Scalars['String'];
    permissions: Array<Permission>;
};
export declare type Customer = Node & {
    __typename?: 'Customer';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    title?: Maybe<Scalars['String']>;
    firstName: Scalars['String'];
    lastName: Scalars['String'];
    phoneNumber?: Maybe<Scalars['String']>;
    emailAddress: Scalars['String'];
    addresses?: Maybe<Array<Address>>;
    orders: OrderList;
    user?: Maybe<User>;
    favorites: FavoriteList;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type CustomerOrdersArgs = {
    options?: Maybe<OrderListOptions>;
};
export declare type CustomerFavoritesArgs = {
    options?: Maybe<FavoriteListOptions>;
    productNameFilter?: Maybe<Scalars['String']>;
};
export declare type CustomerFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    title?: Maybe<StringOperators>;
    firstName?: Maybe<StringOperators>;
    lastName?: Maybe<StringOperators>;
    phoneNumber?: Maybe<StringOperators>;
    emailAddress?: Maybe<StringOperators>;
};
export declare type CustomerGroup = Node & {
    __typename?: 'CustomerGroup';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    name: Scalars['String'];
    customers: CustomerList;
};
export declare type CustomerGroupCustomersArgs = {
    options?: Maybe<CustomerListOptions>;
};
export declare type CustomerList = PaginatedList & {
    __typename?: 'CustomerList';
    items: Array<Customer>;
    totalItems: Scalars['Int'];
};
export declare type CustomerListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<CustomerSortParameter>;
    filter?: Maybe<CustomerFilterParameter>;
};
export declare type CustomerSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    title?: Maybe<SortOrder>;
    firstName?: Maybe<SortOrder>;
    lastName?: Maybe<SortOrder>;
    phoneNumber?: Maybe<SortOrder>;
    emailAddress?: Maybe<SortOrder>;
};
export declare type CustomField = {
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
};
export declare type CustomFieldConfig = StringCustomFieldConfig | LocaleStringCustomFieldConfig | IntCustomFieldConfig | FloatCustomFieldConfig | BooleanCustomFieldConfig | DateTimeCustomFieldConfig;
export declare type CustomFields = {
    __typename?: 'CustomFields';
    Address: Array<CustomFieldConfig>;
    Collection: Array<CustomFieldConfig>;
    Customer: Array<CustomFieldConfig>;
    Facet: Array<CustomFieldConfig>;
    FacetValue: Array<CustomFieldConfig>;
    GlobalSettings: Array<CustomFieldConfig>;
    Order: Array<CustomFieldConfig>;
    OrderLine: Array<CustomFieldConfig>;
    Product: Array<CustomFieldConfig>;
    ProductOption: Array<CustomFieldConfig>;
    ProductOptionGroup: Array<CustomFieldConfig>;
    ProductVariant: Array<CustomFieldConfig>;
    User: Array<CustomFieldConfig>;
    ShippingMethod: Array<CustomFieldConfig>;
};
export declare type DateOperators = {
    eq?: Maybe<Scalars['DateTime']>;
    before?: Maybe<Scalars['DateTime']>;
    after?: Maybe<Scalars['DateTime']>;
    between?: Maybe<DateRange>;
};
export declare type DateRange = {
    start: Scalars['DateTime'];
    end: Scalars['DateTime'];
};
/**
 * Expects the same validation formats as the `<input type="datetime-local">` HTML element.
 * See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#Additional_attributes
 */
export declare type DateTimeCustomFieldConfig = CustomField & {
    __typename?: 'DateTimeCustomFieldConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
    min?: Maybe<Scalars['String']>;
    max?: Maybe<Scalars['String']>;
    step?: Maybe<Scalars['Int']>;
};
export declare type DeletionResponse = {
    __typename?: 'DeletionResponse';
    result: DeletionResult;
    message?: Maybe<Scalars['String']>;
};
export declare enum DeletionResult {
    /** The entity was successfully deleted */
    Deleted = "DELETED",
    /** Deletion did not take place, reason given in message */
    NotDeleted = "NOT_DELETED"
}
export declare type Facet = Node & {
    __typename?: 'Facet';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    code: Scalars['String'];
    values: Array<FacetValue>;
    translations: Array<FacetTranslation>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type FacetList = PaginatedList & {
    __typename?: 'FacetList';
    items: Array<Facet>;
    totalItems: Scalars['Int'];
};
export declare type FacetTranslation = {
    __typename?: 'FacetTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
};
export declare type FacetValue = Node & {
    __typename?: 'FacetValue';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    facet: Facet;
    name: Scalars['String'];
    code: Scalars['String'];
    translations: Array<FacetValueTranslation>;
    customFields?: Maybe<Scalars['JSON']>;
};
/**
 * Which FacetValues are present in the products returned
 * by the search, and in what quantity.
 */
export declare type FacetValueResult = {
    __typename?: 'FacetValueResult';
    facetValue: FacetValue;
    count: Scalars['Int'];
};
export declare type FacetValueTranslation = {
    __typename?: 'FacetValueTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
};
export declare type Favorite = Node & {
    __typename?: 'Favorite';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    product?: Maybe<Product>;
    customer: Customer;
};
export declare type FavoriteFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
};
export declare type FavoriteList = PaginatedList & {
    __typename?: 'FavoriteList';
    items: Array<Favorite>;
    totalItems: Scalars['Int'];
};
export declare type FavoriteListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<FavoriteSortParameter>;
    filter?: Maybe<FavoriteFilterParameter>;
};
export declare type FavoriteSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
};
export declare type FloatCustomFieldConfig = CustomField & {
    __typename?: 'FloatCustomFieldConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
    min?: Maybe<Scalars['Float']>;
    max?: Maybe<Scalars['Float']>;
    step?: Maybe<Scalars['Float']>;
};
export declare type Fulfillment = Node & {
    __typename?: 'Fulfillment';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    orderItems: Array<OrderItem>;
    method: Scalars['String'];
    trackingCode?: Maybe<Scalars['String']>;
};
export declare type GlobalSettings = {
    __typename?: 'GlobalSettings';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    availableLanguages: Array<LanguageCode>;
    trackInventory: Scalars['Boolean'];
    serverConfig: ServerConfig;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type HistoryEntry = Node & {
    __typename?: 'HistoryEntry';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    isPublic: Scalars['Boolean'];
    type: HistoryEntryType;
    administrator?: Maybe<Administrator>;
    data: Scalars['JSON'];
};
export declare type HistoryEntryFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    isPublic?: Maybe<BooleanOperators>;
    type?: Maybe<StringOperators>;
};
export declare type HistoryEntryList = PaginatedList & {
    __typename?: 'HistoryEntryList';
    items: Array<HistoryEntry>;
    totalItems: Scalars['Int'];
};
export declare type HistoryEntryListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<HistoryEntrySortParameter>;
    filter?: Maybe<HistoryEntryFilterParameter>;
};
export declare type HistoryEntrySortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
};
export declare enum HistoryEntryType {
    CustomerRegistered = "CUSTOMER_REGISTERED",
    CustomerVerified = "CUSTOMER_VERIFIED",
    CustomerDetailUpdated = "CUSTOMER_DETAIL_UPDATED",
    CustomerAddedToGroup = "CUSTOMER_ADDED_TO_GROUP",
    CustomerRemovedFromGroup = "CUSTOMER_REMOVED_FROM_GROUP",
    CustomerAddressCreated = "CUSTOMER_ADDRESS_CREATED",
    CustomerAddressUpdated = "CUSTOMER_ADDRESS_UPDATED",
    CustomerAddressDeleted = "CUSTOMER_ADDRESS_DELETED",
    CustomerPasswordUpdated = "CUSTOMER_PASSWORD_UPDATED",
    CustomerPasswordResetRequested = "CUSTOMER_PASSWORD_RESET_REQUESTED",
    CustomerPasswordResetVerified = "CUSTOMER_PASSWORD_RESET_VERIFIED",
    CustomerEmailUpdateRequested = "CUSTOMER_EMAIL_UPDATE_REQUESTED",
    CustomerEmailUpdateVerified = "CUSTOMER_EMAIL_UPDATE_VERIFIED",
    CustomerNote = "CUSTOMER_NOTE",
    OrderStateTransition = "ORDER_STATE_TRANSITION",
    OrderPaymentTransition = "ORDER_PAYMENT_TRANSITION",
    OrderFullfillment = "ORDER_FULLFILLMENT",
    OrderCancellation = "ORDER_CANCELLATION",
    OrderRefundTransition = "ORDER_REFUND_TRANSITION",
    OrderNote = "ORDER_NOTE",
    OrderCouponApplied = "ORDER_COUPON_APPLIED",
    OrderCouponRemoved = "ORDER_COUPON_REMOVED"
}
export declare type ImportInfo = {
    __typename?: 'ImportInfo';
    errors?: Maybe<Array<Scalars['String']>>;
    processed: Scalars['Int'];
    imported: Scalars['Int'];
};
export declare type IntCustomFieldConfig = CustomField & {
    __typename?: 'IntCustomFieldConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
    min?: Maybe<Scalars['Int']>;
    max?: Maybe<Scalars['Int']>;
    step?: Maybe<Scalars['Int']>;
};
/**
 * @description
 * Languages in the form of a ISO 639-1 language code with optional
 * region or script modifier (e.g. de_AT). The selection available is based
 * on the [Unicode CLDR summary list](https://unicode-org.github.io/cldr-staging/charts/37/summary/root.html)
 * and includes the major spoken languages of the world and any widely-used variants.
 *
 * @docsCategory common
 */
export declare enum LanguageCode {
    /** Afrikaans */
    Af = "af",
    /** Akan */
    Ak = "ak",
    /** Albanian */
    Sq = "sq",
    /** Amharic */
    Am = "am",
    /** Arabic */
    Ar = "ar",
    /** Armenian */
    Hy = "hy",
    /** Assamese */
    As = "as",
    /** Azerbaijani */
    Az = "az",
    /** Bambara */
    Bm = "bm",
    /** Bangla */
    Bn = "bn",
    /** Basque */
    Eu = "eu",
    /** Belarusian */
    Be = "be",
    /** Bosnian */
    Bs = "bs",
    /** Breton */
    Br = "br",
    /** Bulgarian */
    Bg = "bg",
    /** Burmese */
    My = "my",
    /** Catalan */
    Ca = "ca",
    /** Chechen */
    Ce = "ce",
    /** Chinese */
    Zh = "zh",
    /** Simplified Chinese */
    ZhHans = "zh_Hans",
    /** Traditional Chinese */
    ZhHant = "zh_Hant",
    /** Church Slavic */
    Cu = "cu",
    /** Cornish */
    Kw = "kw",
    /** Corsican */
    Co = "co",
    /** Croatian */
    Hr = "hr",
    /** Czech */
    Cs = "cs",
    /** Danish */
    Da = "da",
    /** Dutch */
    Nl = "nl",
    /** Flemish */
    NlBe = "nl_BE",
    /** Dzongkha */
    Dz = "dz",
    /** English */
    En = "en",
    /** Australian English */
    EnAu = "en_AU",
    /** Canadian English */
    EnCa = "en_CA",
    /** British English */
    EnGb = "en_GB",
    /** American English */
    EnUs = "en_US",
    /** Esperanto */
    Eo = "eo",
    /** Estonian */
    Et = "et",
    /** Ewe */
    Ee = "ee",
    /** Faroese */
    Fo = "fo",
    /** Finnish */
    Fi = "fi",
    /** French */
    Fr = "fr",
    /** Canadian French */
    FrCa = "fr_CA",
    /** Swiss French */
    FrCh = "fr_CH",
    /** Fulah */
    Ff = "ff",
    /** Galician */
    Gl = "gl",
    /** Ganda */
    Lg = "lg",
    /** Georgian */
    Ka = "ka",
    /** German */
    De = "de",
    /** Austrian German */
    DeAt = "de_AT",
    /** Swiss High German */
    DeCh = "de_CH",
    /** Greek */
    El = "el",
    /** Gujarati */
    Gu = "gu",
    /** Haitian Creole */
    Ht = "ht",
    /** Hausa */
    Ha = "ha",
    /** Hebrew */
    He = "he",
    /** Hindi */
    Hi = "hi",
    /** Hungarian */
    Hu = "hu",
    /** Icelandic */
    Is = "is",
    /** Igbo */
    Ig = "ig",
    /** Indonesian */
    Id = "id",
    /** Interlingua */
    Ia = "ia",
    /** Irish */
    Ga = "ga",
    /** Italian */
    It = "it",
    /** Japanese */
    Ja = "ja",
    /** Javanese */
    Jv = "jv",
    /** Kalaallisut */
    Kl = "kl",
    /** Kannada */
    Kn = "kn",
    /** Kashmiri */
    Ks = "ks",
    /** Kazakh */
    Kk = "kk",
    /** Khmer */
    Km = "km",
    /** Kikuyu */
    Ki = "ki",
    /** Kinyarwanda */
    Rw = "rw",
    /** Korean */
    Ko = "ko",
    /** Kurdish */
    Ku = "ku",
    /** Kyrgyz */
    Ky = "ky",
    /** Lao */
    Lo = "lo",
    /** Latin */
    La = "la",
    /** Latvian */
    Lv = "lv",
    /** Lingala */
    Ln = "ln",
    /** Lithuanian */
    Lt = "lt",
    /** Luba-Katanga */
    Lu = "lu",
    /** Luxembourgish */
    Lb = "lb",
    /** Macedonian */
    Mk = "mk",
    /** Malagasy */
    Mg = "mg",
    /** Malay */
    Ms = "ms",
    /** Malayalam */
    Ml = "ml",
    /** Maltese */
    Mt = "mt",
    /** Manx */
    Gv = "gv",
    /** Maori */
    Mi = "mi",
    /** Marathi */
    Mr = "mr",
    /** Mongolian */
    Mn = "mn",
    /** Nepali */
    Ne = "ne",
    /** North Ndebele */
    Nd = "nd",
    /** Northern Sami */
    Se = "se",
    /** Norwegian Bokmål */
    Nb = "nb",
    /** Norwegian Nynorsk */
    Nn = "nn",
    /** Nyanja */
    Ny = "ny",
    /** Odia */
    Or = "or",
    /** Oromo */
    Om = "om",
    /** Ossetic */
    Os = "os",
    /** Pashto */
    Ps = "ps",
    /** Persian */
    Fa = "fa",
    /** Dari */
    FaAf = "fa_AF",
    /** Polish */
    Pl = "pl",
    /** Portuguese */
    Pt = "pt",
    /** Brazilian Portuguese */
    PtBr = "pt_BR",
    /** European Portuguese */
    PtPt = "pt_PT",
    /** Punjabi */
    Pa = "pa",
    /** Quechua */
    Qu = "qu",
    /** Romanian */
    Ro = "ro",
    /** Moldavian */
    RoMd = "ro_MD",
    /** Romansh */
    Rm = "rm",
    /** Rundi */
    Rn = "rn",
    /** Russian */
    Ru = "ru",
    /** Samoan */
    Sm = "sm",
    /** Sango */
    Sg = "sg",
    /** Sanskrit */
    Sa = "sa",
    /** Scottish Gaelic */
    Gd = "gd",
    /** Serbian */
    Sr = "sr",
    /** Shona */
    Sn = "sn",
    /** Sichuan Yi */
    Ii = "ii",
    /** Sindhi */
    Sd = "sd",
    /** Sinhala */
    Si = "si",
    /** Slovak */
    Sk = "sk",
    /** Slovenian */
    Sl = "sl",
    /** Somali */
    So = "so",
    /** Southern Sotho */
    St = "st",
    /** Spanish */
    Es = "es",
    /** European Spanish */
    EsEs = "es_ES",
    /** Mexican Spanish */
    EsMx = "es_MX",
    /** Sundanese */
    Su = "su",
    /** Swahili */
    Sw = "sw",
    /** Congo Swahili */
    SwCd = "sw_CD",
    /** Swedish */
    Sv = "sv",
    /** Tajik */
    Tg = "tg",
    /** Tamil */
    Ta = "ta",
    /** Tatar */
    Tt = "tt",
    /** Telugu */
    Te = "te",
    /** Thai */
    Th = "th",
    /** Tibetan */
    Bo = "bo",
    /** Tigrinya */
    Ti = "ti",
    /** Tongan */
    To = "to",
    /** Turkish */
    Tr = "tr",
    /** Turkmen */
    Tk = "tk",
    /** Ukrainian */
    Uk = "uk",
    /** Urdu */
    Ur = "ur",
    /** Uyghur */
    Ug = "ug",
    /** Uzbek */
    Uz = "uz",
    /** Vietnamese */
    Vi = "vi",
    /** Volapük */
    Vo = "vo",
    /** Welsh */
    Cy = "cy",
    /** Western Frisian */
    Fy = "fy",
    /** Wolof */
    Wo = "wo",
    /** Xhosa */
    Xh = "xh",
    /** Yiddish */
    Yi = "yi",
    /** Yoruba */
    Yo = "yo",
    /** Zulu */
    Zu = "zu"
}
export declare type LocaleStringCustomFieldConfig = CustomField & {
    __typename?: 'LocaleStringCustomFieldConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
    pattern?: Maybe<Scalars['String']>;
};
export declare type LocalizedString = {
    __typename?: 'LocalizedString';
    languageCode: LanguageCode;
    value: Scalars['String'];
};
export declare enum LogicalOperator {
    And = "AND",
    Or = "OR"
}
export declare type LoginResult = {
    __typename?: 'LoginResult';
    user: CurrentUser;
};
export declare type Mutation = {
    __typename?: 'Mutation';
    /**
     * Adds an item to the order. If custom fields are defined on the OrderLine
     * entity, a third argument 'customFields' will be available.
     */
    addItemToOrder?: Maybe<Order>;
    /** Remove an OrderLine from the Order */
    removeOrderLine?: Maybe<Order>;
    /**
     * Adjusts an OrderLine. If custom fields are defined on the OrderLine entity, a
     * third argument 'customFields' of type `OrderLineCustomFieldsInput` will be available.
     */
    adjustOrderLine?: Maybe<Order>;
    /** Applies the given coupon code to the active Order */
    applyCouponCode?: Maybe<Order>;
    /** Removes the given coupon code from the active Order */
    removeCouponCode?: Maybe<Order>;
    /** Transitions an Order to a new state. Valid next states can be found by querying `nextOrderStates` */
    transitionOrderToState?: Maybe<Order>;
    /** Sets the shipping address for this order */
    setOrderShippingAddress?: Maybe<Order>;
    /** Sets the billing address for this order */
    setOrderBillingAddress?: Maybe<Order>;
    /** Allows any custom fields to be set for the active order */
    setOrderCustomFields?: Maybe<Order>;
    /** Sets the shipping method by id, which can be obtained with the `eligibleShippingMethods` query */
    setOrderShippingMethod?: Maybe<Order>;
    /** Add a Payment to the Order */
    addPaymentToOrder?: Maybe<Order>;
    /** Set the Customer for the Order. Required only if the Customer is not currently logged in */
    setCustomerForOrder?: Maybe<Order>;
    /**
     * Authenticates the user using the native authentication strategy. This mutation
     * is an alias for `authenticate({ native: { ... }})`
     */
    login: LoginResult;
    /** Authenticates the user using a named authentication strategy */
    authenticate: LoginResult;
    /** End the current authenticated session */
    logout: Scalars['Boolean'];
    /**
     * Regenerate and send a verification token for a new Customer registration. Only
     * applicable if `authOptions.requireVerification` is set to true.
     */
    refreshCustomerVerification: Scalars['Boolean'];
    /**
     * Register a Customer account with the given credentials. There are three possible registration flows:
     *
     * _If `authOptions.requireVerification` is set to `true`:_
     *
     * 1. **The Customer is registered _with_ a password**. A verificationToken will
     * be created (and typically emailed to the Customer). That
     *    verificationToken would then be passed to the `verifyCustomerAccount`
     * mutation _without_ a password. The Customer is then
     *    verified and authenticated in one step.
     * 2. **The Customer is registered _without_ a password**. A verificationToken
     * will be created (and typically emailed to the Customer). That
     *    verificationToken would then be passed to the `verifyCustomerAccount`
     * mutation _with_ the chosed password of the Customer. The Customer is then
     *    verified and authenticated in one step.
     *
     * _If `authOptions.requireVerification` is set to `false`:_
     *
     * 3. The Customer _must_ be registered _with_ a password. No further action is
     * needed - the Customer is able to authenticate immediately.
     */
    registerCustomerAccount: Scalars['Boolean'];
    /** Update an existing Customer */
    updateCustomer: Customer;
    /** Create a new Customer Address */
    createCustomerAddress: Address;
    /** Update an existing Address */
    updateCustomerAddress: Address;
    /** Delete an existing Address */
    deleteCustomerAddress: Scalars['Boolean'];
    /**
     * Verify a Customer email address with the token sent to that address. Only
     * applicable if `authOptions.requireVerification` is set to true.
     *
     * If the Customer was not registered with a password in the `registerCustomerAccount` mutation, the a password _must_ be
     * provided here.
     */
    verifyCustomerAccount: LoginResult;
    /** Update the password of the active Customer */
    updateCustomerPassword?: Maybe<Scalars['Boolean']>;
    /**
     * Request to update the emailAddress of the active Customer. If `authOptions.requireVerification` is enabled
     * (as is the default), then the `identifierChangeToken` will be assigned to the current User and
     * a IdentifierChangeRequestEvent will be raised. This can then be used e.g. by the EmailPlugin to email
     * that verification token to the Customer, which is then used to verify the change of email address.
     */
    requestUpdateCustomerEmailAddress?: Maybe<Scalars['Boolean']>;
    /**
     * Confirm the update of the emailAddress with the provided token, which has been generated by the
     * `requestUpdateCustomerEmailAddress` mutation.
     */
    updateCustomerEmailAddress?: Maybe<Scalars['Boolean']>;
    /** Requests a password reset email to be sent */
    requestPasswordReset?: Maybe<Scalars['Boolean']>;
    /** Resets a Customer's password based on the provided token */
    resetPassword: LoginResult;
    toggleFavorite: FavoriteList;
};
export declare type MutationAddItemToOrderArgs = {
    productVariantId: Scalars['ID'];
    quantity: Scalars['Int'];
};
export declare type MutationRemoveOrderLineArgs = {
    orderLineId: Scalars['ID'];
};
export declare type MutationAdjustOrderLineArgs = {
    orderLineId: Scalars['ID'];
    quantity?: Maybe<Scalars['Int']>;
};
export declare type MutationApplyCouponCodeArgs = {
    couponCode: Scalars['String'];
};
export declare type MutationRemoveCouponCodeArgs = {
    couponCode: Scalars['String'];
};
export declare type MutationTransitionOrderToStateArgs = {
    state: Scalars['String'];
};
export declare type MutationSetOrderShippingAddressArgs = {
    input: CreateAddressInput;
};
export declare type MutationSetOrderBillingAddressArgs = {
    input: CreateAddressInput;
};
export declare type MutationSetOrderCustomFieldsArgs = {
    input: UpdateOrderInput;
};
export declare type MutationSetOrderShippingMethodArgs = {
    shippingMethodId: Scalars['ID'];
};
export declare type MutationAddPaymentToOrderArgs = {
    input: PaymentInput;
};
export declare type MutationSetCustomerForOrderArgs = {
    input: CreateCustomerInput;
};
export declare type MutationLoginArgs = {
    username: Scalars['String'];
    password: Scalars['String'];
    rememberMe?: Maybe<Scalars['Boolean']>;
};
export declare type MutationAuthenticateArgs = {
    input: AuthenticationInput;
    rememberMe?: Maybe<Scalars['Boolean']>;
};
export declare type MutationRefreshCustomerVerificationArgs = {
    emailAddress: Scalars['String'];
};
export declare type MutationRegisterCustomerAccountArgs = {
    input: RegisterCustomerInput;
};
export declare type MutationUpdateCustomerArgs = {
    input: UpdateCustomerInput;
};
export declare type MutationCreateCustomerAddressArgs = {
    input: CreateAddressInput;
};
export declare type MutationUpdateCustomerAddressArgs = {
    input: UpdateAddressInput;
};
export declare type MutationDeleteCustomerAddressArgs = {
    id: Scalars['ID'];
};
export declare type MutationVerifyCustomerAccountArgs = {
    token: Scalars['String'];
    password?: Maybe<Scalars['String']>;
};
export declare type MutationUpdateCustomerPasswordArgs = {
    currentPassword: Scalars['String'];
    newPassword: Scalars['String'];
};
export declare type MutationRequestUpdateCustomerEmailAddressArgs = {
    password: Scalars['String'];
    newEmailAddress: Scalars['String'];
};
export declare type MutationUpdateCustomerEmailAddressArgs = {
    token: Scalars['String'];
};
export declare type MutationRequestPasswordResetArgs = {
    emailAddress: Scalars['String'];
};
export declare type MutationResetPasswordArgs = {
    token: Scalars['String'];
    password: Scalars['String'];
};
export declare type MutationToggleFavoriteArgs = {
    productId: Scalars['ID'];
    options?: Maybe<FavoriteListOptions>;
};
export declare type NativeAuthInput = {
    username: Scalars['String'];
    password: Scalars['String'];
};
export declare type Node = {
    id: Scalars['ID'];
};
export declare type NumberOperators = {
    eq?: Maybe<Scalars['Float']>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    between?: Maybe<NumberRange>;
};
export declare type NumberRange = {
    start: Scalars['Float'];
    end: Scalars['Float'];
};
export declare type Order = Node & {
    __typename?: 'Order';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    /** A unique code for the Order */
    code: Scalars['String'];
    state: Scalars['String'];
    /** An order is active as long as the payment process has not been completed */
    active: Scalars['Boolean'];
    customer?: Maybe<Customer>;
    shippingAddress?: Maybe<OrderAddress>;
    billingAddress?: Maybe<OrderAddress>;
    lines: Array<OrderLine>;
    /** Order-level adjustments to the order total, such as discounts from promotions */
    adjustments: Array<Adjustment>;
    couponCodes: Array<Scalars['String']>;
    /** Promotions applied to the order. Only gets populated after the payment process has completed. */
    promotions: Array<Promotion>;
    payments?: Maybe<Array<Payment>>;
    fulfillments?: Maybe<Array<Fulfillment>>;
    subTotalBeforeTax: Scalars['Int'];
    /** The subTotal is the total of the OrderLines, before order-level promotions and shipping has been applied. */
    subTotal: Scalars['Int'];
    currencyCode: CurrencyCode;
    shipping: Scalars['Int'];
    shippingWithTax: Scalars['Int'];
    shippingMethod?: Maybe<ShippingMethod>;
    totalBeforeTax: Scalars['Int'];
    total: Scalars['Int'];
    history: HistoryEntryList;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type OrderHistoryArgs = {
    options?: Maybe<HistoryEntryListOptions>;
};
export declare type OrderAddress = {
    __typename?: 'OrderAddress';
    fullName?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    streetLine1?: Maybe<Scalars['String']>;
    streetLine2?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    country?: Maybe<Scalars['String']>;
    countryCode?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
};
export declare type OrderFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    code?: Maybe<StringOperators>;
    state?: Maybe<StringOperators>;
    active?: Maybe<BooleanOperators>;
    subTotalBeforeTax?: Maybe<NumberOperators>;
    subTotal?: Maybe<NumberOperators>;
    currencyCode?: Maybe<StringOperators>;
    shipping?: Maybe<NumberOperators>;
    shippingWithTax?: Maybe<NumberOperators>;
    totalBeforeTax?: Maybe<NumberOperators>;
    total?: Maybe<NumberOperators>;
};
export declare type OrderItem = Node & {
    __typename?: 'OrderItem';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    cancelled: Scalars['Boolean'];
    unitPrice: Scalars['Int'];
    unitPriceWithTax: Scalars['Int'];
    unitPriceIncludesTax: Scalars['Boolean'];
    taxRate: Scalars['Float'];
    adjustments: Array<Adjustment>;
    fulfillment?: Maybe<Fulfillment>;
    refundId?: Maybe<Scalars['ID']>;
};
export declare type OrderLine = Node & {
    __typename?: 'OrderLine';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    productVariant: ProductVariant;
    featuredAsset?: Maybe<Asset>;
    unitPrice: Scalars['Int'];
    unitPriceWithTax: Scalars['Int'];
    quantity: Scalars['Int'];
    items: Array<OrderItem>;
    totalPrice: Scalars['Int'];
    adjustments: Array<Adjustment>;
    order: Order;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type OrderList = PaginatedList & {
    __typename?: 'OrderList';
    items: Array<Order>;
    totalItems: Scalars['Int'];
};
export declare type OrderListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<OrderSortParameter>;
    filter?: Maybe<OrderFilterParameter>;
};
export declare type OrderProcessState = {
    __typename?: 'OrderProcessState';
    name: Scalars['String'];
    to: Array<Scalars['String']>;
};
export declare type OrderSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    code?: Maybe<SortOrder>;
    state?: Maybe<SortOrder>;
    subTotalBeforeTax?: Maybe<SortOrder>;
    subTotal?: Maybe<SortOrder>;
    shipping?: Maybe<SortOrder>;
    shippingWithTax?: Maybe<SortOrder>;
    totalBeforeTax?: Maybe<SortOrder>;
    total?: Maybe<SortOrder>;
};
export declare type PaginatedList = {
    items: Array<Node>;
    totalItems: Scalars['Int'];
};
export declare type Payment = Node & {
    __typename?: 'Payment';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    method: Scalars['String'];
    amount: Scalars['Int'];
    state: Scalars['String'];
    transactionId?: Maybe<Scalars['String']>;
    errorMessage?: Maybe<Scalars['String']>;
    refunds: Array<Refund>;
    metadata?: Maybe<Scalars['JSON']>;
};
/** Passed as input to the `addPaymentToOrder` mutation. */
export declare type PaymentInput = {
    /** This field should correspond to the `code` property of a PaymentMethodHandler. */
    method: Scalars['String'];
    /**
     * This field should contain arbitrary data passed to the specified PaymentMethodHandler's `createPayment()` method
     * as the "metadata" argument. For example, it could contain an ID for the payment and other
     * data generated by the payment provider.
     */
    metadata: Scalars['JSON'];
};
export declare type PaymentMethod = Node & {
    __typename?: 'PaymentMethod';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    code: Scalars['String'];
    enabled: Scalars['Boolean'];
    configArgs: Array<ConfigArg>;
};
/**
 * "
 * @description
 * Permissions for administrators and customers. Used to control access to
 * GraphQL resolvers via the {@link Allow} decorator.
 *
 * @docsCategory common
 */
export declare enum Permission {
    /**  The Authenticated role means simply that the user is logged in  */
    Authenticated = "Authenticated",
    /**  SuperAdmin can perform the most sensitive tasks */
    SuperAdmin = "SuperAdmin",
    /**  Owner means the user owns this entity, e.g. a Customer's own Order */
    Owner = "Owner",
    /**  Public means any unauthenticated user may perform the operation  */
    Public = "Public",
    CreateCatalog = "CreateCatalog",
    ReadCatalog = "ReadCatalog",
    UpdateCatalog = "UpdateCatalog",
    DeleteCatalog = "DeleteCatalog",
    CreateCustomer = "CreateCustomer",
    ReadCustomer = "ReadCustomer",
    UpdateCustomer = "UpdateCustomer",
    DeleteCustomer = "DeleteCustomer",
    CreateAdministrator = "CreateAdministrator",
    ReadAdministrator = "ReadAdministrator",
    UpdateAdministrator = "UpdateAdministrator",
    DeleteAdministrator = "DeleteAdministrator",
    CreateOrder = "CreateOrder",
    ReadOrder = "ReadOrder",
    UpdateOrder = "UpdateOrder",
    DeleteOrder = "DeleteOrder",
    CreatePromotion = "CreatePromotion",
    ReadPromotion = "ReadPromotion",
    UpdatePromotion = "UpdatePromotion",
    DeletePromotion = "DeletePromotion",
    CreateSettings = "CreateSettings",
    ReadSettings = "ReadSettings",
    UpdateSettings = "UpdateSettings",
    DeleteSettings = "DeleteSettings"
}
/** The price range where the result has more than one price */
export declare type PriceRange = {
    __typename?: 'PriceRange';
    min: Scalars['Int'];
    max: Scalars['Int'];
};
export declare type Product = Node & {
    __typename?: 'Product';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    slug: Scalars['String'];
    description: Scalars['String'];
    featuredAsset?: Maybe<Asset>;
    assets: Array<Asset>;
    variants: Array<ProductVariant>;
    optionGroups: Array<ProductOptionGroup>;
    facetValues: Array<FacetValue>;
    translations: Array<ProductTranslation>;
    collections: Array<Collection>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type ProductFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    languageCode?: Maybe<StringOperators>;
    name?: Maybe<StringOperators>;
    slug?: Maybe<StringOperators>;
    description?: Maybe<StringOperators>;
};
export declare type ProductList = PaginatedList & {
    __typename?: 'ProductList';
    items: Array<Product>;
    totalItems: Scalars['Int'];
};
export declare type ProductListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<ProductSortParameter>;
    filter?: Maybe<ProductFilterParameter>;
};
export declare type ProductOption = Node & {
    __typename?: 'ProductOption';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    code: Scalars['String'];
    name: Scalars['String'];
    groupId: Scalars['ID'];
    group: ProductOptionGroup;
    translations: Array<ProductOptionTranslation>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type ProductOptionGroup = Node & {
    __typename?: 'ProductOptionGroup';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    code: Scalars['String'];
    name: Scalars['String'];
    options: Array<ProductOption>;
    translations: Array<ProductOptionGroupTranslation>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type ProductOptionGroupTranslation = {
    __typename?: 'ProductOptionGroupTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
};
export declare type ProductOptionTranslation = {
    __typename?: 'ProductOptionTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
};
export declare type ProductSortParameter = {
    id?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    slug?: Maybe<SortOrder>;
    description?: Maybe<SortOrder>;
};
export declare type ProductTranslation = {
    __typename?: 'ProductTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
    slug: Scalars['String'];
    description: Scalars['String'];
};
export declare type ProductVariant = Node & {
    __typename?: 'ProductVariant';
    id: Scalars['ID'];
    product: Product;
    productId: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    sku: Scalars['String'];
    name: Scalars['String'];
    featuredAsset?: Maybe<Asset>;
    assets: Array<Asset>;
    price: Scalars['Int'];
    currencyCode: CurrencyCode;
    priceIncludesTax: Scalars['Boolean'];
    priceWithTax: Scalars['Int'];
    taxRateApplied: TaxRate;
    taxCategory: TaxCategory;
    options: Array<ProductOption>;
    facetValues: Array<FacetValue>;
    translations: Array<ProductVariantTranslation>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type ProductVariantFilterParameter = {
    createdAt?: Maybe<DateOperators>;
    updatedAt?: Maybe<DateOperators>;
    languageCode?: Maybe<StringOperators>;
    sku?: Maybe<StringOperators>;
    name?: Maybe<StringOperators>;
    price?: Maybe<NumberOperators>;
    currencyCode?: Maybe<StringOperators>;
    priceIncludesTax?: Maybe<BooleanOperators>;
    priceWithTax?: Maybe<NumberOperators>;
};
export declare type ProductVariantList = PaginatedList & {
    __typename?: 'ProductVariantList';
    items: Array<ProductVariant>;
    totalItems: Scalars['Int'];
};
export declare type ProductVariantListOptions = {
    skip?: Maybe<Scalars['Int']>;
    take?: Maybe<Scalars['Int']>;
    sort?: Maybe<ProductVariantSortParameter>;
    filter?: Maybe<ProductVariantFilterParameter>;
};
export declare type ProductVariantSortParameter = {
    id?: Maybe<SortOrder>;
    productId?: Maybe<SortOrder>;
    createdAt?: Maybe<SortOrder>;
    updatedAt?: Maybe<SortOrder>;
    sku?: Maybe<SortOrder>;
    name?: Maybe<SortOrder>;
    price?: Maybe<SortOrder>;
    priceWithTax?: Maybe<SortOrder>;
};
export declare type ProductVariantTranslation = {
    __typename?: 'ProductVariantTranslation';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    languageCode: LanguageCode;
    name: Scalars['String'];
};
export declare type Promotion = Node & {
    __typename?: 'Promotion';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    startsAt?: Maybe<Scalars['DateTime']>;
    endsAt?: Maybe<Scalars['DateTime']>;
    couponCode?: Maybe<Scalars['String']>;
    perCustomerUsageLimit?: Maybe<Scalars['Int']>;
    name: Scalars['String'];
    enabled: Scalars['Boolean'];
    conditions: Array<ConfigurableOperation>;
    actions: Array<ConfigurableOperation>;
};
export declare type PromotionList = PaginatedList & {
    __typename?: 'PromotionList';
    items: Array<Promotion>;
    totalItems: Scalars['Int'];
};
export declare type Query = {
    __typename?: 'Query';
    /** The active Channel */
    activeChannel: Channel;
    /** The active Customer */
    activeCustomer?: Maybe<Customer>;
    /**
     * The active Order. Will be `null` until an Order is created via `addItemToOrder`. Once an Order reaches the
     * state of `PaymentApproved` or `PaymentSettled`, then that Order is no longer considered "active" and this
     * query will once again return `null`.
     */
    activeOrder?: Maybe<Order>;
    /** An array of supported Countries */
    availableCountries: Array<Country>;
    /** A list of Collections available to the shop */
    collections: CollectionList;
    /** Returns a Collection either by its id or slug. If neither 'id' nor 'slug' is speicified, an error will result. */
    collection?: Maybe<Collection>;
    /** Returns a list of eligible shipping methods based on the current active Order */
    eligibleShippingMethods: Array<ShippingMethodQuote>;
    /** Returns information about the current authenticated User */
    me?: Maybe<CurrentUser>;
    /** Returns the possible next states that the activeOrder can transition to */
    nextOrderStates: Array<Scalars['String']>;
    /**
     * Returns an Order based on the id. Note that in the Shop API, only orders belonging to the
     * currently-authenticated User may be queried.
     */
    order?: Maybe<Order>;
    /**
     * Returns an Order based on the order `code`. For guest Orders (i.e. Orders placed by non-authenticated Customers)
     * this query will only return the Order within 2 hours of the Order being placed. This allows an Order confirmation
     * screen to be shown immediately after completion of a guest checkout, yet prevents security risks of allowing
     * general anonymous access to Order data.
     */
    orderByCode?: Maybe<Order>;
    /** Get a Product either by id or slug. If neither 'id' nor 'slug' is speicified, an error will result. */
    product?: Maybe<Product>;
    /** Get a list of Products */
    products: ProductList;
    /** Search Products based on the criteria set by the `SearchInput` */
    search: SearchResponse;
};
export declare type QueryCollectionsArgs = {
    options?: Maybe<CollectionListOptions>;
};
export declare type QueryCollectionArgs = {
    id?: Maybe<Scalars['ID']>;
    slug?: Maybe<Scalars['String']>;
};
export declare type QueryOrderArgs = {
    id: Scalars['ID'];
};
export declare type QueryOrderByCodeArgs = {
    code: Scalars['String'];
};
export declare type QueryProductArgs = {
    id?: Maybe<Scalars['ID']>;
    slug?: Maybe<Scalars['String']>;
};
export declare type QueryProductsArgs = {
    options?: Maybe<ProductListOptions>;
};
export declare type QuerySearchArgs = {
    input: SearchInput;
};
export declare type Refund = Node & {
    __typename?: 'Refund';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    items: Scalars['Int'];
    shipping: Scalars['Int'];
    adjustment: Scalars['Int'];
    total: Scalars['Int'];
    method?: Maybe<Scalars['String']>;
    state: Scalars['String'];
    transactionId?: Maybe<Scalars['String']>;
    reason?: Maybe<Scalars['String']>;
    orderItems: Array<OrderItem>;
    paymentId: Scalars['ID'];
    metadata?: Maybe<Scalars['JSON']>;
};
export declare type RegisterCustomerInput = {
    emailAddress: Scalars['String'];
    title?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
    password?: Maybe<Scalars['String']>;
};
export declare type Return = Node & StockMovement & {
    __typename?: 'Return';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    productVariant: ProductVariant;
    type: StockMovementType;
    quantity: Scalars['Int'];
    orderItem: OrderItem;
};
export declare type Role = Node & {
    __typename?: 'Role';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    code: Scalars['String'];
    description: Scalars['String'];
    permissions: Array<Permission>;
    channels: Array<Channel>;
};
export declare type RoleList = PaginatedList & {
    __typename?: 'RoleList';
    items: Array<Role>;
    totalItems: Scalars['Int'];
};
export declare type Sale = Node & StockMovement & {
    __typename?: 'Sale';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    productVariant: ProductVariant;
    type: StockMovementType;
    quantity: Scalars['Int'];
    orderLine: OrderLine;
};
export declare type SearchInput = {
    term?: Maybe<Scalars['String']>;
    facetValueIds?: Maybe<Array<Scalars['ID']>>;
    facetValueOperator?: Maybe<LogicalOperator>;
    collectionId?: Maybe<Scalars['ID']>;
    groupByProduct?: Maybe<Scalars['Boolean']>;
    take?: Maybe<Scalars['Int']>;
    skip?: Maybe<Scalars['Int']>;
    sort?: Maybe<SearchResultSortParameter>;
};
export declare type SearchReindexResponse = {
    __typename?: 'SearchReindexResponse';
    success: Scalars['Boolean'];
};
export declare type SearchResponse = {
    __typename?: 'SearchResponse';
    items: Array<SearchResult>;
    totalItems: Scalars['Int'];
    facetValues: Array<FacetValueResult>;
};
export declare type SearchResult = {
    __typename?: 'SearchResult';
    sku: Scalars['String'];
    slug: Scalars['String'];
    productId: Scalars['ID'];
    productName: Scalars['String'];
    /** @deprecated Use `productAsset.preview` instead */
    productPreview: Scalars['String'];
    productAsset?: Maybe<SearchResultAsset>;
    productVariantId: Scalars['ID'];
    productVariantName: Scalars['String'];
    /** @deprecated Use `productVariantAsset.preview` instead */
    productVariantPreview: Scalars['String'];
    productVariantAsset?: Maybe<SearchResultAsset>;
    price: SearchResultPrice;
    priceWithTax: SearchResultPrice;
    currencyCode: CurrencyCode;
    description: Scalars['String'];
    facetIds: Array<Scalars['ID']>;
    facetValueIds: Array<Scalars['ID']>;
    /** An array of ids of the Collections in which this result appears */
    collectionIds: Array<Scalars['ID']>;
    /** A relevence score for the result. Differs between database implementations */
    score: Scalars['Float'];
};
export declare type SearchResultAsset = {
    __typename?: 'SearchResultAsset';
    id: Scalars['ID'];
    preview: Scalars['String'];
    focalPoint?: Maybe<Coordinate>;
};
/** The price of a search result product, either as a range or as a single price */
export declare type SearchResultPrice = PriceRange | SinglePrice;
export declare type SearchResultSortParameter = {
    name?: Maybe<SortOrder>;
    price?: Maybe<SortOrder>;
};
export declare type ServerConfig = {
    __typename?: 'ServerConfig';
    orderProcess: Array<OrderProcessState>;
    customFieldConfig: CustomFields;
};
export declare type ShippingMethod = Node & {
    __typename?: 'ShippingMethod';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    code: Scalars['String'];
    description: Scalars['String'];
    checker: ConfigurableOperation;
    calculator: ConfigurableOperation;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type ShippingMethodList = PaginatedList & {
    __typename?: 'ShippingMethodList';
    items: Array<ShippingMethod>;
    totalItems: Scalars['Int'];
};
export declare type ShippingMethodQuote = {
    __typename?: 'ShippingMethodQuote';
    id: Scalars['ID'];
    price: Scalars['Int'];
    priceWithTax: Scalars['Int'];
    description: Scalars['String'];
    metadata?: Maybe<Scalars['JSON']>;
};
/** The price value where the result has a single price */
export declare type SinglePrice = {
    __typename?: 'SinglePrice';
    value: Scalars['Int'];
};
export declare enum SortOrder {
    Asc = "ASC",
    Desc = "DESC"
}
export declare type StockAdjustment = Node & StockMovement & {
    __typename?: 'StockAdjustment';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    productVariant: ProductVariant;
    type: StockMovementType;
    quantity: Scalars['Int'];
};
export declare type StockMovement = {
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    productVariant: ProductVariant;
    type: StockMovementType;
    quantity: Scalars['Int'];
};
export declare type StockMovementItem = StockAdjustment | Sale | Cancellation | Return;
export declare type StockMovementList = {
    __typename?: 'StockMovementList';
    items: Array<StockMovementItem>;
    totalItems: Scalars['Int'];
};
export declare enum StockMovementType {
    Adjustment = "ADJUSTMENT",
    Sale = "SALE",
    Cancellation = "CANCELLATION",
    Return = "RETURN"
}
export declare type StringCustomFieldConfig = CustomField & {
    __typename?: 'StringCustomFieldConfig';
    name: Scalars['String'];
    type: Scalars['String'];
    length?: Maybe<Scalars['Int']>;
    label?: Maybe<Array<LocalizedString>>;
    description?: Maybe<Array<LocalizedString>>;
    readonly?: Maybe<Scalars['Boolean']>;
    internal?: Maybe<Scalars['Boolean']>;
    pattern?: Maybe<Scalars['String']>;
    options?: Maybe<Array<StringFieldOption>>;
};
export declare type StringFieldOption = {
    __typename?: 'StringFieldOption';
    value: Scalars['String'];
    label?: Maybe<Array<LocalizedString>>;
};
export declare type StringOperators = {
    eq?: Maybe<Scalars['String']>;
    contains?: Maybe<Scalars['String']>;
};
export declare type TaxCategory = Node & {
    __typename?: 'TaxCategory';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    name: Scalars['String'];
};
export declare type TaxRate = Node & {
    __typename?: 'TaxRate';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    name: Scalars['String'];
    enabled: Scalars['Boolean'];
    value: Scalars['Float'];
    category: TaxCategory;
    zone: Zone;
    customerGroup?: Maybe<CustomerGroup>;
};
export declare type TaxRateList = PaginatedList & {
    __typename?: 'TaxRateList';
    items: Array<TaxRate>;
    totalItems: Scalars['Int'];
};
export declare type UpdateAddressInput = {
    id: Scalars['ID'];
    fullName?: Maybe<Scalars['String']>;
    company?: Maybe<Scalars['String']>;
    streetLine1?: Maybe<Scalars['String']>;
    streetLine2?: Maybe<Scalars['String']>;
    city?: Maybe<Scalars['String']>;
    province?: Maybe<Scalars['String']>;
    postalCode?: Maybe<Scalars['String']>;
    countryCode?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
    defaultShippingAddress?: Maybe<Scalars['Boolean']>;
    defaultBillingAddress?: Maybe<Scalars['Boolean']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type UpdateCustomerInput = {
    title?: Maybe<Scalars['String']>;
    firstName?: Maybe<Scalars['String']>;
    lastName?: Maybe<Scalars['String']>;
    phoneNumber?: Maybe<Scalars['String']>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type UpdateOrderInput = {
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type User = Node & {
    __typename?: 'User';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    identifier: Scalars['String'];
    verified: Scalars['Boolean'];
    roles: Array<Role>;
    lastLogin?: Maybe<Scalars['DateTime']>;
    authenticationMethods: Array<AuthenticationMethod>;
    customFields?: Maybe<Scalars['JSON']>;
};
export declare type Zone = Node & {
    __typename?: 'Zone';
    id: Scalars['ID'];
    createdAt: Scalars['DateTime'];
    updatedAt: Scalars['DateTime'];
    name: Scalars['String'];
    members: Array<Country>;
};
