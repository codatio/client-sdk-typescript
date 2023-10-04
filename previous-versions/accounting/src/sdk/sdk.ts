/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { AccountTransactions } from "./accounttransactions";
import { BankAccounts } from "./bankaccounts";
import { BankAccountTransactions } from "./bankaccounttransactions";
import { BillCreditNotes } from "./billcreditnotes";
import { BillPayments } from "./billpayments";
import { Bills } from "./bills";
import { CompanyInfo } from "./companyinfo";
import { CreditNotes } from "./creditnotes";
import { Customers } from "./customers";
import { DirectCosts } from "./directcosts";
import { DirectIncomes } from "./directincomes";
import { Invoices } from "./invoices";
import { Items } from "./items";
import { JournalEntries } from "./journalentries";
import { Journals } from "./journals";
import * as shared from "./models/shared";
import { PaymentMethods } from "./paymentmethods";
import { Payments } from "./payments";
import { PurchaseOrders } from "./purchaseorders";
import { Reports } from "./reports";
import { SalesOrders } from "./salesorders";
import { Suppliers } from "./suppliers";
import { TaxRates } from "./taxrates";
import { TrackingCategories } from "./trackingcategories";
import { Transfers } from "./transfers";
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
    sdkVersion = "0.38.0";
    genVersion = "2.144.7";
    userAgent = "speakeasy-sdk/typescript 0.38.0 2.144.7 3.0.0 @codat/accounting";
    retryConfig?: utils.RetryConfig;
    public constructor(init?: Partial<SDKConfiguration>) {
        Object.assign(this, init);
    }
}

/**
 * Accounting API: A flexible API for pulling accounting data, normalized and aggregated from 20 accounting integrations.
 *
 * @remarks
 *
 * Standardize how you connect to your customers’ accounting software. View, create, update, and delete data in the same way for all the leading accounting platforms.
 *
 * [Read more...](https://docs.codat.io/accounting-api/overview)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class CodatAccounting {
    /**
     * Account transactions
     */
    public accountTransactions: AccountTransactions;
    /**
     * Accounts
     */
    public accounts: Accounts;
    /**
     * Bank transactions for bank accounts
     */
    public bankAccountTransactions: BankAccountTransactions;
    /**
     * Bank accounts
     */
    public bankAccounts: BankAccounts;
    /**
     * Bill credit notes
     */
    public billCreditNotes: BillCreditNotes;
    /**
     * Bill payments
     */
    public billPayments: BillPayments;
    /**
     * Bills
     */
    public bills: Bills;
    /**
     * Company info
     */
    public companyInfo: CompanyInfo;
    /**
     * Credit notes
     */
    public creditNotes: CreditNotes;
    /**
     * Customers
     */
    public customers: Customers;
    /**
     * Direct costs
     */
    public directCosts: DirectCosts;
    /**
     * Direct incomes
     */
    public directIncomes: DirectIncomes;
    /**
     * Invoices
     */
    public invoices: Invoices;
    /**
     * Items
     */
    public items: Items;
    /**
     * Journal entries
     */
    public journalEntries: JournalEntries;
    /**
     * Journals
     */
    public journals: Journals;
    /**
     * Payment methods
     */
    public paymentMethods: PaymentMethods;
    /**
     * Payments
     */
    public payments: Payments;
    /**
     * Purchase orders
     */
    public purchaseOrders: PurchaseOrders;
    /**
     * Reports
     */
    public reports: Reports;
    /**
     * Sales orders
     */
    public salesOrders: SalesOrders;
    /**
     * Suppliers
     */
    public suppliers: Suppliers;
    /**
     * Tax rates
     */
    public taxRates: TaxRates;
    /**
     * Tracking categories
     */
    public trackingCategories: TrackingCategories;
    /**
     * Transfers
     */
    public transfers: Transfers;

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

        this.accountTransactions = new AccountTransactions(this.sdkConfiguration);
        this.accounts = new Accounts(this.sdkConfiguration);
        this.bankAccountTransactions = new BankAccountTransactions(this.sdkConfiguration);
        this.bankAccounts = new BankAccounts(this.sdkConfiguration);
        this.billCreditNotes = new BillCreditNotes(this.sdkConfiguration);
        this.billPayments = new BillPayments(this.sdkConfiguration);
        this.bills = new Bills(this.sdkConfiguration);
        this.companyInfo = new CompanyInfo(this.sdkConfiguration);
        this.creditNotes = new CreditNotes(this.sdkConfiguration);
        this.customers = new Customers(this.sdkConfiguration);
        this.directCosts = new DirectCosts(this.sdkConfiguration);
        this.directIncomes = new DirectIncomes(this.sdkConfiguration);
        this.invoices = new Invoices(this.sdkConfiguration);
        this.items = new Items(this.sdkConfiguration);
        this.journalEntries = new JournalEntries(this.sdkConfiguration);
        this.journals = new Journals(this.sdkConfiguration);
        this.paymentMethods = new PaymentMethods(this.sdkConfiguration);
        this.payments = new Payments(this.sdkConfiguration);
        this.purchaseOrders = new PurchaseOrders(this.sdkConfiguration);
        this.reports = new Reports(this.sdkConfiguration);
        this.salesOrders = new SalesOrders(this.sdkConfiguration);
        this.suppliers = new Suppliers(this.sdkConfiguration);
        this.taxRates = new TaxRates(this.sdkConfiguration);
        this.trackingCategories = new TrackingCategories(this.sdkConfiguration);
        this.transfers = new Transfers(this.sdkConfiguration);
    }
}
