/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { AccountMapping } from "./accountmapping";
import { Companies } from "./companies";
import { Connections } from "./connections";
import { SourceAccounts } from "./sourceaccounts";
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
    sdkVersion = "3.1.0";
    genVersion = "2.214.3";
    userAgent = "speakeasy-sdk/typescript 3.1.0 2.214.3 3.0.0 @codat/bank-feeds";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Bank Feeds API: Bank Feeds API enables your SMB users to set up bank feeds from accounts in your application to supported accounting platforms.
 *
 * @remarks
 *
 * A bank feed is a connection between a source bank account in your application and a target bank account in a supported accounting package.
 *
 * [Explore product](https://docs.codat.io/bank-feeds-api/overview) | [See OpenAPI spec](https://github.com/codatio/oas)
 *
 * ---
 *
 * ## Endpoints
 *
 * | Endpoints | Description |
 * | :- | :- |
 * | Companies | Create and manage your SMB users' companies. |
 * | Connections | Create new and manage existing data connections for a company. |
 * | Source accounts | Provide and manage lists of source bank accounts.   |
 * | Transactions | Create new bank account transactions for a company's connections, and see previous operations. |
 * | Account mapping | Extra functionality for building an account management UI |
 */
export class CodatBankFeeds {
    /**
     * Create and manage your Codat companies.
     */
    public companies: Companies;
    /**
     * Manage your companies' data connections.
     */
    public connections: Connections;
    /**
     * Bank feed bank account mapping.
     */
    public accountMapping: AccountMapping;
    /**
     * Source accounts act as a bridge to bank accounts in accounting software.
     */
    public sourceAccounts: SourceAccounts;
    /**
     * Transactions represent debits and credits from a source account.
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

        this.companies = new Companies(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
        this.accountMapping = new AccountMapping(this.sdkConfiguration);
        this.sourceAccounts = new SourceAccounts(this.sdkConfiguration);
        this.transactions = new Transactions(this.sdkConfiguration);
    }
}
