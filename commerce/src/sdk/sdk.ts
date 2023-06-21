/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { CompanyInfo } from "./companyinfo";
import { Customers } from "./customers";
import { Disputes } from "./disputes";
import { Locations } from "./locations";
import * as shared from "./models/shared";
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
    security?: shared.Security;
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
};

export class SDKConfiguration {
    defaultClient: AxiosInstance;
    securityClient: AxiosInstance;
    serverURL: string;
    serverDefaults: any;
    language = "typescript";
    openapiDocVersion = "2.1.0";
    sdkVersion = "0.26.3";
    genVersion = "2.41.5";

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
    public companyInfo: CompanyInfo;
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

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        let securityClient = defaultClient;

        if (props?.security) {
            let security: shared.Security = props.security;
            if (!(props.security instanceof utils.SpeakeasyBase)) {
                security = new shared.Security(props.security);
            }
            securityClient = utils.createSecurityClient(defaultClient, security);
        }

        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            securityClient: securityClient,
            serverURL: serverURL,
        });

        this.companyInfo = new CompanyInfo(this.sdkConfiguration);
        this.customers = new Customers(this.sdkConfiguration);
        this.disputes = new Disputes(this.sdkConfiguration);
        this.locations = new Locations(this.sdkConfiguration);
        this.orders = new Orders(this.sdkConfiguration);
        this.payments = new Payments(this.sdkConfiguration);
        this.products = new Products(this.sdkConfiguration);
        this.taxComponents = new TaxComponents(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
    }
}
