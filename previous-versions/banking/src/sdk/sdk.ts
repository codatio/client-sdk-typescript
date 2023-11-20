/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { AccountBalances } from "./accountbalances";
import { Accounts } from "./accounts";
import { TransactionCategories } from "./transactioncategories";
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
    sdkVersion = "0.32.1";
    genVersion = "2.194.1";
    userAgent = "speakeasy-sdk/typescript 0.32.1 2.194.1 3.0.0 @codat/banking";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Banking API: Codat's standardized API for accessing banking data.
 *
 * @remarks
 * Codat's Banking API allows you to access standardised data from over bank accounts via third party providers.
 *
 * Standardize how you connect to your customers’ bank accounts. Retrieve bank account and bank transaction data in the same way via our partnerships with Plaid and TrueLayer.
 *
 * [Read more...](https://docs.codat.io/banking-api/overview)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class CodatBanking {
    /**
     * Balances for a bank account including end-of-day batch balance or running balances per transaction.
     */
    public accountBalances: AccountBalances;
    /**
     * Where payments are made or received, and bank transactions are recorded.
     */
    public accounts: Accounts;
    /**
     * Hierarchical categories associated with a transaction for greater contextual meaning to transaction activity.
     */
    public transactionCategories: TransactionCategories;
    /**
     * An immutable source of up-to-date information on income and expenditure.
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

        this.accountBalances = new AccountBalances(this.sdkConfiguration);
        this.accounts = new Accounts(this.sdkConfiguration);
        this.transactionCategories = new TransactionCategories(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
    }
}
