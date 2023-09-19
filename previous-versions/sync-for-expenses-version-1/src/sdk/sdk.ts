/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Companies } from "./companies";
import { Configuration } from "./configuration";
import { Connections } from "./connections";
import { Expenses } from "./expenses";
import { MappingOptions } from "./mappingoptions";
import * as shared from "./models/shared";
import { Sync } from "./sync";
import { SyncStatus } from "./syncstatus";
import { TransactionStatus } from "./transactionstatus";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.codat.io"] as const;

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
    openapiDocVersion = "prealpha";
    sdkVersion = "0.2.0";
    genVersion = "2.109.3";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Sync for Expenses (v1): The API for Sync for Expenses.
 *
 * @remarks
 *
 * Sync for Expenses is an API and a set of supporting tools. It has been built to
 * enable corporate card and expense management platforms to provide high-quality
 * integrations with multiple accounting platforms through a standardized API.
 *
 * [Read more...](https://docs.codat.io/sync-for-expenses/overview)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 *
 * Not seeing what you expect? [See the main Sync for Commerce API](https://docs.codat.io/sync-for-commerce-api).
 */
export class CodatSyncExpenses {
    /**
     * Create and manage your Codat companies.
     */
    public companies: Companies;
    /**
     * Companies sync configuration.
     */
    public configuration: Configuration;
    /**
     * Create and manage partner expense connection.
     */
    public connections: Connections;
    /**
     * Create expense datasets and upload receipts.
     */
    public expenses: Expenses;
    /**
     * Mapping options for a companies expenses.
     */
    public mappingOptions: MappingOptions;
    /**
     * Triggering a new sync of expenses to accounting software.
     */
    public sync: Sync;
    /**
     * Check the status of ongoing or previous expense syncs.
     */
    public syncStatus: SyncStatus;
    /**
     * Retrieve the status of transactions within a sync.
     */
    public transactionStatus: TransactionStatus;

    private sdkConfiguration: SDKConfiguration;

    constructor(props?: SDKProps) {
        let serverURL = props?.serverURL;
        const serverIdx = props?.serverIdx ?? 0;

        if (!serverURL) {
            serverURL = ServerList[serverIdx];
        }

        const defaultClient = props?.defaultClient ?? axios.create({ baseURL: serverURL });
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.companies = new Companies(this.sdkConfiguration);
        this.configuration = new Configuration(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
        this.expenses = new Expenses(this.sdkConfiguration);
        this.mappingOptions = new MappingOptions(this.sdkConfiguration);
        this.sync = new Sync(this.sdkConfiguration);
        this.syncStatus = new SyncStatus(this.sdkConfiguration);
        this.transactionStatus = new TransactionStatus(this.sdkConfiguration);
    }
}