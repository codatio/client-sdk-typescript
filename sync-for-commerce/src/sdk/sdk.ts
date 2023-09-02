/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { AdvancedControls } from "./advancedcontrols";
import { Connections } from "./connections";
import { Integrations } from "./integrations";
import * as shared from "./models/shared";
import { Sync } from "./sync";
import { SyncFlowPreferences } from "./syncflowpreferences";
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
    openapiDocVersion = "1.1";
    sdkVersion = "0.32.1";
    genVersion = "2.93.0";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Sync for Commerce: The API for Sync for Commerce.
 *
 * @remarks
 *
 * Sync for Commerce is an API and a set of supporting tools built to enable e-commerce and point of sale platforms to provide high-quality integrations with numerous accounting platform through standardized API, seamlessly transforming business sale's data into accounting artefacts.
 *
 * [Read More...](https://docs.codat.io/commerce/overview)
 *
 * <!-- Not seeing the end points you're expecting? We've reorganized our products, and you may be using a [different version of Sync for Commerce](https://docs.codat.io/sync-for-commerce-v1-api#/). -->
 */
export class CodatSyncCommerce {
    /**
     * Advanced company management and sync preferences.
     */
    public advancedControls: AdvancedControls;
    /**
     * Create new and manage existing Sync for Commerce companies using the Sync flow UI.
     */
    public connections: Connections;
    /**
     * View useful information about codat's integrations.
     */
    public integrations: Integrations;
    /**
     * Initiate and monitor the sync of company data into accounting software.
     */
    public sync: Sync;
    /**
     * Configure preferences for any given Sync for Commerce company using sync flow.
     */
    public syncFlowPreferences: SyncFlowPreferences;

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

        this.advancedControls = new AdvancedControls(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
        this.integrations = new Integrations(this.sdkConfiguration);
        this.sync = new Sync(this.sdkConfiguration);
        this.syncFlowPreferences = new SyncFlowPreferences(this.sdkConfiguration);
    }
}
