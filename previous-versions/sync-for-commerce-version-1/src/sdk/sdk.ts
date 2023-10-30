/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { AccountingAccounts } from "./accountingaccounts";
import { AccountingBankAccounts } from "./accountingbankaccounts";
import { AccountingCompanyInfo } from "./accountingcompanyinfo";
import { AccountingCreditNotes } from "./accountingcreditnotes";
import { AccountingCustomers } from "./accountingcustomers";
import { AccountingDirectIncomes } from "./accountingdirectincomes";
import { AccountingInvoices } from "./accountinginvoices";
import { AccountingJournalEntries } from "./accountingjournalentries";
import { AccountingPayments } from "./accountingpayments";
import { CommerceCompanyInfo } from "./commercecompanyinfo";
import { CommerceCustomers } from "./commercecustomers";
import { CommerceLocations } from "./commercelocations";
import { CommerceOrders } from "./commerceorders";
import { CommercePayments } from "./commercepayments";
import { CommerceProducts } from "./commerceproducts";
import { CommerceTransactions } from "./commercetransactions";
import { Companies } from "./companies";
import { CompanyManagement } from "./companymanagement";
import { Configuration } from "./configuration";
import { Connections } from "./connections";
import { Integrations } from "./integrations";
import * as shared from "./models/shared";
import { PushData } from "./pushdata";
import { RefreshData } from "./refreshdata";
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
    sdkVersion = "0.5.0";
    genVersion = "2.173.0";
    userAgent = "speakeasy-sdk/typescript 0.5.0 2.173.0 1.1 @codat/sync-for-commerce-version-1";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Sync for Commerce (v1): The API for Sync for Commerce V1.
 *
 * @remarks
 *
 * Sync for Commerce automatically replicates and reconciles sales data from a merchant’s source PoS, Payments, and eCommerce systems into their accounting software. This eliminates manual processing by merchants and transforms their ability to run and grow their business.
 *
 * [Read More...](https://docs.codat.io/commerce/overview)
 *
 * Not seeing what you expect? [See the main Sync for Commerce API](https://docs.codat.io/sync-for-commerce-api).
 */
export class CodatSyncCommerce {
    /**
     * Accounts
     */
    public accountingAccounts: AccountingAccounts;
    /**
     * Bank accounts
     */
    public accountingBankAccounts: AccountingBankAccounts;
    /**
     * Company info
     */
    public accountingCompanyInfo: AccountingCompanyInfo;
    /**
     * Credit notes
     */
    public accountingCreditNotes: AccountingCreditNotes;
    /**
     * Customers
     */
    public accountingCustomers: AccountingCustomers;
    /**
     * Direct incomes
     */
    public accountingDirectIncomes: AccountingDirectIncomes;
    /**
     * Invoices
     */
    public accountingInvoices: AccountingInvoices;
    /**
     * Journal entries
     */
    public accountingJournalEntries: AccountingJournalEntries;
    /**
     * Payments
     */
    public accountingPayments: AccountingPayments;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public commerceCompanyInfo: CommerceCompanyInfo;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public commerceCustomers: CommerceCustomers;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public commerceLocations: CommerceLocations;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public commerceOrders: CommerceOrders;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public commercePayments: CommercePayments;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public commerceProducts: CommerceProducts;
    /**
     * Retrieve standardized data from linked commerce platforms.
     */
    public commerceTransactions: CommerceTransactions;
    /**
     * Create and manage your Codat companies.
     */
    public companies: Companies;
    /**
     * Create new and manage existing Sync for Commerce companies.
     */
    public companyManagement: CompanyManagement;
    /**
     * Expressively configure preferences for any given Sync for Commerce company.
     */
    public configuration: Configuration;
    /**
     * Manage your companies' data connections.
     */
    public connections: Connections;
    /**
     * View useful information about codat's integrations.
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
     * Initiate a sync of Sync for Commerce company data into their respective accounting software.
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
        this.sdkConfiguration = new SDKConfiguration({
            defaultClient: defaultClient,
            security: props?.security,
            serverURL: serverURL,
            retryConfig: props?.retryConfig,
        });

        this.accountingAccounts = new AccountingAccounts(this.sdkConfiguration);
        this.accountingBankAccounts = new AccountingBankAccounts(this.sdkConfiguration);
        this.accountingCompanyInfo = new AccountingCompanyInfo(this.sdkConfiguration);
        this.accountingCreditNotes = new AccountingCreditNotes(this.sdkConfiguration);
        this.accountingCustomers = new AccountingCustomers(this.sdkConfiguration);
        this.accountingDirectIncomes = new AccountingDirectIncomes(this.sdkConfiguration);
        this.accountingInvoices = new AccountingInvoices(this.sdkConfiguration);
        this.accountingJournalEntries = new AccountingJournalEntries(this.sdkConfiguration);
        this.accountingPayments = new AccountingPayments(this.sdkConfiguration);
        this.commerceCompanyInfo = new CommerceCompanyInfo(this.sdkConfiguration);
        this.commerceCustomers = new CommerceCustomers(this.sdkConfiguration);
        this.commerceLocations = new CommerceLocations(this.sdkConfiguration);
        this.commerceOrders = new CommerceOrders(this.sdkConfiguration);
        this.commercePayments = new CommercePayments(this.sdkConfiguration);
        this.commerceProducts = new CommerceProducts(this.sdkConfiguration);
        this.commerceTransactions = new CommerceTransactions(this.sdkConfiguration);
        this.companies = new Companies(this.sdkConfiguration);
        this.companyManagement = new CompanyManagement(this.sdkConfiguration);
        this.configuration = new Configuration(this.sdkConfiguration);
        this.connections = new Connections(this.sdkConfiguration);
        this.integrations = new Integrations(this.sdkConfiguration);
        this.pushData = new PushData(this.sdkConfiguration);
        this.refreshData = new RefreshData(this.sdkConfiguration);
        this.sync = new Sync(this.sdkConfiguration);
        this.syncFlowPreferences = new SyncFlowPreferences(this.sdkConfiguration);
    }
}
