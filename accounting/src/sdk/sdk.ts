import * as utils from "../internal/utils";
import { Accounts } from "./accounts";
import { AccountTransactions } from "./accounttransactions";
import { BankAccounts } from "./bankaccounts";
import { BankAccountTransactions } from "./bankaccounttransactions";
import { BillCreditNotes } from "./billcreditnotes";
import { BillPayments } from "./billpayments";
import { Bills } from "./bills";
import { CreditNotes } from "./creditnotes";
import { Customers } from "./customers";
import { DirectCosts } from "./directcosts";
import { DirectIncomes } from "./directincomes";
import { Financials } from "./financials";
import { Info } from "./info";
import { Invoices } from "./invoices";
import { Items } from "./items";
import { JournalEntries } from "./journalentries";
import { Journals } from "./journals";
import { Security } from "./models/shared";
import { PaymentMethods } from "./paymentmethods";
import { Payments } from "./payments";
import { PurchaseOrders } from "./purchaseorders";
import { SalesOrders } from "./salesorders";
import { Suppliers } from "./suppliers";
import { TaxRates } from "./taxrates";
import { TrackingCategories } from "./trackingcategories";
import { Transfers } from "./transfers";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://api.codat.io",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: Security;

  serverUrl?: string;
}


export class SDK {
  public accountTransactions: AccountTransactions;
  public accounts: Accounts;
  public bankAccountTransactions: BankAccountTransactions;
  public bankAccounts: BankAccounts;
  public billCreditNotes: BillCreditNotes;
  public billPayments: BillPayments;
  public bills: Bills;
  public creditNotes: CreditNotes;
  public customers: Customers;
  public directCosts: DirectCosts;
  public directIncomes: DirectIncomes;
  public financials: Financials;
  public info: Info;
  public invoices: Invoices;
  public items: Items;
  public journalEntries: JournalEntries;
  public journals: Journals;
  public paymentMethods: PaymentMethods;
  public payments: Payments;
  public purchaseOrders: PurchaseOrders;
  public salesOrders: SalesOrders;
  public suppliers: Suppliers;
  public taxRates: TaxRates;
  public trackingCategories: TrackingCategories;
  public transfers: Transfers;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.0.1";
  private _genVersion = "1.4.8";

  constructor(props: SDKProps) {
    this._serverURL = props.serverUrl ?? ServerList[0];

    this._defaultClient = props.defaultClient ?? axios.create({ baseURL: this._serverURL });
    if (props.security) {
      let security: Security = props.security;
      if (!(props.security instanceof utils.SpeakeasyBase))
        security = new Security(props.security);
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
    
    this.info = new Info(
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