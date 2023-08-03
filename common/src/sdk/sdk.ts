/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Companies } from "./companies";
import { Connections } from "./connections";
import { Integrations } from "./integrations";
import * as shared from "./models/shared";
import { PushData } from "./pushdata";
import { RefreshData } from "./refreshdata";
import { Settings } from "./settings";
import { SupplementalData } from "./supplementaldata";
import { Webhooks } from "./webhooks";
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
    sdkVersion = "0.40.0";
    genVersion = "2.77.1";

    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Common API: Common API
 *
 * @remarks
 * An API for the common components of all of Codat's products.
 *
 * These end points cover creating and managing your companies, data connections, and integrations.
 *
 * [Read about the building blocks of Codat...](https://docs.codat.io/core-concepts/companies)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class CodatCommon {
    /**
     * Create and manage your Codat companies.
     */
    public companies: Companies;
    /**
     * Manage your companies' data connections.
     */
    public connections: Connections;
    /**
     * View and manage your available integrations in Codat.
     */
    public integrations: Integrations;
    /**
     * View push options and get push statuses.
     */
    public pushData: PushData;
    /**
     * Asynchronously retrieve data from an integration to refresh data in Codat.
     */
    public refreshData: RefreshData;
    /**
     * Manage your Codat instance.
     */
    public settings: Settings;
    /**
     * View and configure supplemental data for supported data types.
     */
    public supplementalData: SupplementalData;
    /**
     * Manage webhooks, rules, and events.
     */
    public webhooks: Webhooks;

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

        this.companies = new Companies(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
        this.integrations = new Integrations(this.sdkConfiguration);
        this.pushData = new PushData(this.sdkConfiguration);
        this.refreshData = new RefreshData(this.sdkConfiguration);
        this.settings = new Settings(this.sdkConfiguration);
        this.supplementalData = new SupplementalData(this.sdkConfiguration);
        this.webhooks = new Webhooks(this.sdkConfiguration);
    }
}
