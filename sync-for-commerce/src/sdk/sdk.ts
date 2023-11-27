/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { AdvancedControls } from "./advancedcontrols";
import { Connections } from "./connections";
import { Integrations } from "./integrations";
import { Sync } from "./sync";
import { SyncFlowSettings } from "./syncflowsettings";
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
    openapiDocVersion = "1.1";
    sdkVersion = "3.0.0";
    genVersion = "2.195.2";
    userAgent = "speakeasy-sdk/typescript 3.0.0 2.195.2 1.1 @codat/sync-for-commerce";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Sync for Commerce: The API for Sync for Commerce.
 *
 * @remarks
 *
 * Sync for Commerce automatically replicates and reconciles sales data from a merchant’s source PoS, Payments, and eCommerce systems into their accounting software. This eliminates manual processing by merchants and transforms their ability to run and grow their business.
 *
 * [Read More...](https://docs.codat.io/commerce/overview)
 *
 * Not seeing the endpoints you're expecting? We've [reorganized our products](https://docs.codat.io/updates/230901-new-products), and you may be using a [different version of Sync for Commerce](https://docs.codat.io/sync-for-commerce-v1-api#/).
 */
export class CodatSyncCommerce {
    /**
     * Configure preferences for any given Sync for Commerce company using sync flow.
     */
    public syncFlowSettings: SyncFlowSettings;
    /**
     * Advanced company management and sync preferences.
     */
    public advancedControls: AdvancedControls;
    /**
     * Create new and manage existing Sync for Commerce connections using the Sync flow UI.
     */
    public connections: Connections;
    /**
     * Initiate and monitor the sync of company data into accounting software.
     */
    public sync: Sync;
    /**
     * View useful information about codat's integrations.
     */
    public integrations: Integrations;

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

        this.syncFlowSettings = new SyncFlowSettings(this.sdkConfiguration);
        this.advancedControls = new AdvancedControls(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
        this.sync = new Sync(this.sdkConfiguration);
        this.integrations = new Integrations(this.sdkConfiguration);
    }
}
