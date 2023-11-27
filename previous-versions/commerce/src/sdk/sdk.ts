/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { CompanyInfo } from "./companyinfo";
import { Customers } from "./customers";
import { Disputes } from "./disputes";
import { Locations } from "./locations";
import { Orders } from "./orders";
import { Payments } from "./payments";
import { Products } from "./products";
import { TaxComponents } from "./taxcomponents";
import { Transactions } from "./transactions";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = [
    /**
     * Production
     */
    "https://api.codat.io",
] as const;

/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * The security details required to authenticate the SDK
     */
    security?: shared.Security | (() => Promise<shared.Security>);

    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;

    /**
     * Allows overriding the default server used by the SDK
     */
    serverIdx?: number;

    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
    /**
     * Allows overriding the default retry config used by the SDK
     */
    retryConfig?: utils.RetryConfig;
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    security?: shared.Security | (() => Promise<shared.Security>);
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "3.0.0";
    sdkVersion = "0.38.0";
    genVersion = "2.195.2";
    userAgent = "speakeasy-sdk/typescript 0.38.0 2.195.2 3.0.0 @codat/commerce";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Commerce API: Codat's standardized API for accessing commerce data
 *
 * @remarks
 * Codat's Commerce API allows you to access standardised data from over 11 commerce and POS systems.
 *
 * Standardize how you connect to your customers’ payment, PoS, and eCommerce systems. Retrieve orders, payouts, payments, and product data in the same way for all the leading commerce platforms.
 *
 * [Read more...](https://docs.codat.io/commerce-api/overview)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class CodatCommerce {
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public customers: Customers;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public disputes: Disputes;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public companyInfo: CompanyInfo;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public locations: Locations;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public orders: Orders;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public payments: Payments;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public products: Products;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public taxComponents: TaxComponents;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public transactions: Transactions;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create();
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.customers = new Customers(this.sdkConfiguration);
        this.disputes = new Disputes(this.sdkConfiguration);
        this.companyInfo = new CompanyInfo(this.sdkConfiguration);
        this.locations = new Locations(this.sdkConfiguration);
        this.orders = new Orders(this.sdkConfiguration);
        this.payments = new Payments(this.sdkConfiguration);
        this.products = new Products(this.sdkConfiguration);
        this.taxComponents = new TaxComponents(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
    }
}
