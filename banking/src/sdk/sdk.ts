import * as utils from "../internal/utils";
import { AccountBalances } from "./accountbalances";
import { Accounts } from "./accounts";
import * as shared from "./models/shared";
import { TransactionCategories } from "./transactioncategories";
import { Transactions } from "./transactions";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://api.codat.io",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: shared.Security;

  serverUrl?: string;
}

/* SDK Documentation: Codat's Banking API allows you to access standardised data from over bank accounts via third party providers.
 * 
 * Standardize how you connect to your customers’ bank accounts. Retrieve bank account and bank transaction data in the same way via our partnerships with Plaid and TrueLayer.
 * 
 * [Read more...](https://docs.codat.io/banking-api/overview)
 * 
 * [See our OpenAPI spec](https://github.com/codatio/oas) */
export class Codat {
  public accountBalances: AccountBalances;
  public accounts: Accounts;
  public transactionCategories: TransactionCategories;
  public transactions: Transactions;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.3.1";
  private _genVersion = "1.9.2";

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverUrl ?? ServerList[0];

    this._defaultClient = props?.defaultClient ?? axios.create({ baseURL: this._serverURL });
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
    
    this.accountBalances = new AccountBalances(
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
    
    this.transactionCategories = new TransactionCategories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.transactions = new Transactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}