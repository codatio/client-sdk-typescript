/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
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
    openapiDocVersion = "prealpha";
    sdkVersion = "0.34.0";
    genVersion = "2.84.3";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Sync for Expenses API: The API for Sync for Expenses.
 *
 * @remarks
 * Sync for Expenses is an API and a set of supporting tools. It has been built to enable corporate card and expense management platforms to provide high-quality integrations with multiple accounting platforms through a standardized API.
 *
 * [Read more...](https://docs.codat.io/sync-for-expenses/overview)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class CodatSyncExpenses {
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

        this.configuration = new Configuration(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
        this.expenses = new Expenses(this.sdkConfiguration);
        this.mappingOptions = new MappingOptions(this.sdkConfiguration);
        this.sync = new Sync(this.sdkConfiguration);
        this.syncStatus = new SyncStatus(this.sdkConfiguration);
        this.transactionStatus = new TransactionStatus(this.sdkConfiguration);
    }
}