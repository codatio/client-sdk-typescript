/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { Companies } from "./companies";
import { CompanyInfo } from "./companyinfo";
import { Connections } from "./connections";
import { JournalEntries } from "./journalentries";
import { Journals } from "./journals";
import { ManageData } from "./managedata";
import * as shared from "./models/shared";
import { TrackingCategories } from "./trackingcategories";
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
    sdkVersion = "1.2.1";
    genVersion = "2.131.1";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Sync for Payroll: The API for Sync for Payroll.
 *
 * @remarks
 *
 * Sync for Payroll is an API and a set of supporting tools built to help integrate your customers' payroll data from their HR and payroll platforms into their accounting platforms and to support its reconciliation.
 *
 * [Explore product](https://docs.codat.io/payroll/overview) | [See OpenAPI spec](https://github.com/codatio/oas)
 *
 * ---
 *
 * ## Endpoints
 *
 * | Endpoints            | Description                                                                                                |
 * |:---------------------|:-----------------------------------------------------------------------------------------------------------|
 * | Companies            | Create and manage your SMB users' companies.                                                               |
 * | Connections          | Create new and manage existing data connections for a company.                                             |
 * | Accounts             | Get, create, and update Accounts.                                                           |
 * | Journal entries      | Get, create, and update Journal entries.                                                           |
 * | Journals             | Get, create, and update Journals.                                                           |
 * | Tracking categories  | Get, create, and update Tracking Categories for additional categorization of payroll components.                                                           |
 * | Company info         | View company profile from the source platform.                                                             |
 * | Manage data          | Control how data is retrieved from an integration.                                                         |
 */
export class CodatSyncPayroll {
    /**
     * Accounts
     */
    public accounts: Accounts;
    /**
     * Create and manage your Codat companies.
     */
    public companies: Companies;
    /**
     * View company information fetched from the source platform.
     */
    public companyInfo: CompanyInfo;
    /**
     * Manage your companies' data connections.
     */
    public connections: Connections;
    /**
     * Journal entries
     */
    public journalEntries: JournalEntries;
    /**
     * Journals
     */
    public journals: Journals;
    /**
     * Asynchronously retrieve data from an integration to refresh data in Codat.
     */
    public manageData: ManageData;
    /**
     * Tracking categories
     */
    public trackingCategories: TrackingCategories;

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
        this.companyInfo = new CompanyInfo(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
        this.journalEntries = new JournalEntries(this.sdkConfiguration);
        this.journals = new Journals(this.sdkConfiguration);
        this.manageData = new ManageData(this.sdkConfiguration);
        this.trackingCategories = new TrackingCategories(this.sdkConfiguration);
    }
}
