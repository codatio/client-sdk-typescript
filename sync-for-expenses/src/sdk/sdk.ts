/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { Companies } from "./companies";
import { Configuration } from "./configuration";
import { Connections } from "./connections";
import { Customers } from "./customers";
import { Expenses } from "./expenses";
import { ManageData } from "./managedata";
import * as shared from "./models/shared";
import { PushOperations } from "./pushoperations";
import { Suppliers } from "./suppliers";
import { Sync } from "./sync";
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
    sdkVersion = "3.2.0";
    genVersion = "2.150.0";
    userAgent = "speakeasy-sdk/typescript 3.2.0 2.150.0 prealpha @codat/sync-for-expenses";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Sync for Expenses: The API for Sync for Expenses.
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
 * Not seeing the endpoints you're expecting? We've [reorganized our products](https://docs.codat.io/updates/230901-new-products), and you may be using a [different version of Sync for Commerce](https://docs.codat.io/sync-for-expenses-v1-api#/).
 */
export class CodatSyncExpenses {
    /**
     * Accounts
     */
    public accounts: Accounts;
    /**
     * Create and manage your Codat companies.
     */
    public companies: Companies;
    /**
     * Manage mapping options and sync configuration.
     */
    public configuration: Configuration;
    /**
     * Create and manage partner expense connection.
     */
    public connections: Connections;
    /**
     * Customers
     */
    public customers: Customers;
    /**
     * Create expense datasets and upload receipts.
     */
    public expenses: Expenses;
    /**
     * Asynchronously retrieve data from an integration to refresh data in Codat.
     */
    public manageData: ManageData;
    /**
     * Access create, update and delete operations made to an SMB's data connection.
     */
    public pushOperations: PushOperations;
    /**
     * Suppliers
     */
    public suppliers: Suppliers;
    /**
     * Trigger and monitor expense syncs to accounting software.
     */
    public sync: Sync;
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

        this.accounts = new Accounts(this.sdkConfiguration);
        this.companies = new Companies(this.sdkConfiguration);
        this.configuration = new Configuration(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
        this.customers = new Customers(this.sdkConfiguration);
        this.expenses = new Expenses(this.sdkConfiguration);
        this.manageData = new ManageData(this.sdkConfiguration);
        this.pushOperations = new PushOperations(this.sdkConfiguration);
        this.suppliers = new Suppliers(this.sdkConfiguration);
        this.sync = new Sync(this.sdkConfiguration);
        this.transactionStatus = new TransactionStatus(this.sdkConfiguration);
    }
}
