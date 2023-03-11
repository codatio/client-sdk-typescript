import * as utils from "../internal/utils";
import { BankAccountTransactions } from "./bankaccounttransactions";
import { BankFeedAccounts } from "./bankfeedaccounts";
import * as shared from "./models/shared";
import axios, { AxiosInstance } from "axios";

export const ServerList = [
	"https://api.codat.io",
] as const;



export type SDKProps = {
  defaultClient?: AxiosInstance;

  security?: shared.Security;

  serverUrl?: string;
}

/* SDK Documentation: Bank Feeds API enables your SMB users to set up bank feeds from accounts in your application to supported accounting platforms.
 * 
 * A bank feed is a connection between a source bank account—in your application—and a target bank account in a supported accounting package.
 * 
 * [Read more...](https://docs.codat.io/bank-feeds-api/overview)
 * 
 * [See our OpenAPI spec](https://github.com/codatio/oas) */
export class Codat {
  public bankAccountTransactions: BankAccountTransactions;
  public bankFeedAccounts: BankFeedAccounts;

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
    
    this.bankAccountTransactions = new BankAccountTransactions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
    
    this.bankFeedAccounts = new BankFeedAccounts(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
  
}