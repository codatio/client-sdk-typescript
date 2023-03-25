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
import { Financials } from "./financials";
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
import axios, { AxiosInstance } from "axios";

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
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
};

/**
 * A flexible API for pulling accounting data, normalized and aggregated from 20 accounting integrations.
 *
 * @remarks
 *
 * Standardize how you connect to your customers’ accounting software. View, create, update, and delete data in the same way for all the leading accounting platforms.
 *
 * [Read more...](https://docs.codat.io/accounting-api/overview)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class Codat {
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
   * Financials
   */
  public financials: Financials;
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

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.8.0";
  private _genVersion = "2.16.1";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverURL ?? ServerList[0];

    this._defaultClient =
      props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props?.security) {
      let security: shared.Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new shared.Security(props.security);
      this._securityClient = utils.createSecurityClient(
        this._defaultClient,
        security
      );
    } else {
      this._securityClient = this._defaultClient;
    }

    this.accountTransactions = new AccountTransactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.accounts = new Accounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.bankAccountTransactions = new BankAccountTransactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.bankAccounts = new BankAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.billCreditNotes = new BillCreditNotes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.billPayments = new BillPayments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.bills = new Bills(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.companyInfo = new CompanyInfo(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.creditNotes = new CreditNotes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.customers = new Customers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.directCosts = new DirectCosts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.directIncomes = new DirectIncomes(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.financials = new Financials(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.invoices = new Invoices(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.items = new Items(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.journalEntries = new JournalEntries(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.journals = new Journals(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.paymentMethods = new PaymentMethods(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.payments = new Payments(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.purchaseOrders = new PurchaseOrders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.reports = new Reports(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.salesOrders = new SalesOrders(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.suppliers = new Suppliers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.taxRates = new TaxRates(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.trackingCategories = new TrackingCategories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.transfers = new Transfers(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
