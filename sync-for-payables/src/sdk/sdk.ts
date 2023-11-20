/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as shared from "../sdk/models/shared";
import { Accounts } from "./accounts";
import { BillCreditNotes } from "./billcreditnotes";
import { BillPayments } from "./billpayments";
import { Bills } from "./bills";
import { Companies } from "./companies";
import { CompanyInfo } from "./companyinfo";
import { Connections } from "./connections";
import { JournalEntries } from "./journalentries";
import { Journals } from "./journals";
import { ManageData } from "./managedata";
import { PaymentMethods } from "./paymentmethods";
import { PushOperations } from "./pushoperations";
import { Suppliers } from "./suppliers";
import { TaxRates } from "./taxrates";
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
    sdkVersion = "2.0.1";
    genVersion = "2.194.1";
    userAgent = "speakeasy-sdk/typescript 2.0.1 2.194.1 3.0.0 @codat/sync-for-payables";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Sync for Payables: The API for Sync for Payables.
 *
 * @remarks
 *
 * Sync for Payables is an API and a set of supporting tools built to help integrate with your customers' accounting software, and keep their supplier information, invoices, and payments in sync.
 *
 * [Explore product](https://docs.codat.io/payables/overview) | [See OpenAPI spec](https://github.com/codatio/oas)
 *
 * ---
 *
 * ## Endpoints
 *
 * | Endpoints            | Description                                                                                                |
 * |:---------------------|:-----------------------------------------------------------------------------------------------------------|
 * | Companies            | Create and manage your SMB users' companies.                                                               |
 * | Connections          | Create new and manage existing data connections for a company.                                             |
 * | Accounts             | Get, create, and update Accounts                                                           |
 * | Bills                | Get, create, and update Bills                                                                          |
 * | Bill credit notes    | Get, create, and update Bill credit notes                                                              |
 * | Bill payments        | Get, create, and update Bill payments                                                                  |
 * | Journals             | Get, create, and update Journals                                                                       |
 * | Journal entries      | Get, create, and update Journal entries                                                                |
 * | Payment methods      | Get, create, and update Payment methods                                                                |
 * | Suppliers            | Get, create, and update Suppliers                                                                      |
 * | Tax rates            | Get, create, and update Tax rates                                                                      |
 * | Tracking categories  | Get, create, and update Tracking categories                                                            |
 * | Push operations      | View historic push operations                                                         |
 * | Company info         | View company profile from the source platform.                                                             |
 * | Manage data          | Control how data is retrieved from an integration.                                                         |
 */
export class CodatSyncPayables {
    /**
     * Create and manage your Codat companies.
     */
    public companies: Companies;
    /**
     * Manage your companies' data connections.
     */
    public connections: Connections;
    /**
     * Bills
     */
    public bills: Bills;
    /**
     * Bill credit notes
     */
    public billCreditNotes: BillCreditNotes;
    /**
     * Bill payments
     */
    public billPayments: BillPayments;
    /**
     * Accounts
     */
    public accounts: Accounts;
    /**
     * Journal entries
     */
    public journalEntries: JournalEntries;
    /**
     * Journals
     */
    public journals: Journals;
    /**
     * Suppliers
     */
    public suppliers: Suppliers;
    /**
     * Asynchronously retrieve data from an integration to refresh data in Codat.
     */
    public manageData: ManageData;
    /**
     * View company information fetched from the source platform.
     */
    public companyInfo: CompanyInfo;
    /**
     * Payment methods
     */
    public paymentMethods: PaymentMethods;
    /**
     * Tax rates
     */
    public taxRates: TaxRates;
    /**
     * Tracking categories
     */
    public trackingCategories: TrackingCategories;
    /**
     * Access create, update and delete operations made to an SMB's data connection.
     */
    public pushOperations: PushOperations;

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
        this.bills = new Bills(this.sdkConfiguration);
        this.billCreditNotes = new BillCreditNotes(this.sdkConfiguration);
        this.billPayments = new BillPayments(this.sdkConfiguration);
        this.accounts = new Accounts(this.sdkConfiguration);
        this.journalEntries = new JournalEntries(this.sdkConfiguration);
        this.journals = new Journals(this.sdkConfiguration);
        this.suppliers = new Suppliers(this.sdkConfiguration);
        this.manageData = new ManageData(this.sdkConfiguration);
        this.companyInfo = new CompanyInfo(this.sdkConfiguration);
        this.paymentMethods = new PaymentMethods(this.sdkConfiguration);
        this.taxRates = new TaxRates(this.sdkConfiguration);
        this.trackingCategories = new TrackingCategories(this.sdkConfiguration);
        this.pushOperations = new PushOperations(this.sdkConfiguration);
    }
}
