/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { BankAccountMapping } from "./bankaccountmapping";
import { BankAccountTransactions } from "./bankaccounttransactions";
import { BankFeedAccounts } from "./bankfeedaccounts";
import { Companies } from "./companies";
import { Connections } from "./connections";
import * as shared from "./models/shared";
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
    sdkVersion = "0.37.1";
    genVersion = "2.70.2";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Bank Feeds API: Bank Feeds API enables your SMB users to set up bank feeds from accounts in your application to supported accounting platforms.
 *
 * @remarks
 *
 * A bank feed is a connection between a source bank account—in your application—and a target bank account in a supported accounting package.
 *
 * [Read more...](https://docs.codat.io/bank-feeds-api/overview)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class CodatBankFeeds {
    /**
     * Bank feed bank account mapping
     */
    public bankAccountMapping: BankAccountMapping;
    /**
     * Bank feed bank accounts
     */
    public bankAccountTransactions: BankAccountTransactions;
    /**
     * Bank feed bank accounts
     */
    public bankFeedAccounts: BankFeedAccounts;
    /**
     * Create and manage your Codat companies.
     */
    public companies: Companies;
    /**
     * Manage your companies' data connections.
     */
    public connections: Connections;

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

        this.bankAccountMapping = new BankAccountMapping(this.sdkConfiguration);
        this.bankAccountTransactions = new BankAccountTransactions(this.sdkConfiguration);
        this.bankFeedAccounts = new BankFeedAccounts(this.sdkConfiguration);
        this.companies = new Companies(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
    }
}
