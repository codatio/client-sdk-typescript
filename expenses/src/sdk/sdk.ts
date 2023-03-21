import * as utils from "../internal/utils";
import { Configuration } from "./configuration";
import { Connections } from "./connections";
import { Expenses } from "./expenses";
import { MappingOptions } from "./mappingoptions";
import * as shared from "./models/shared";
import { Sync } from "./sync";
import { SyncStatus } from "./syncstatus";
import { TransactionStatus } from "./transactionstatus";
import axios, { AxiosInstance } from "axios";

export const ServerList = ["https://api.codat.io"] as const;

export type SDKProps = {
  security?: shared.Security;
  defaultClient?: AxiosInstance;
  serverUrl?: string;
};

/* SDK Documentation: The API for Sync for Expenses.
 * Sync for Expenses is an API and a set of supporting tools. It has been built to enable corporate card and expense management platforms to provide high-quality integrations with multiple accounting platforms through a standardized API.
 *
 * [Read more...](https://docs.codat.io/sync-for-expenses/overview)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class Codat {
  public configuration: Configuration;
  public connections: Connections;
  public expenses: Expenses;
  public mappingOptions: MappingOptions;
  public sync: Sync;
  public syncStatus: SyncStatus;
  public transactionStatus: TransactionStatus;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.5.3";
  private _genVersion = "1.12.4";
  private _globals: any;

  constructor(props?: SDKProps) {
    this._serverURL = props?.serverUrl ?? ServerList[0];

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

    this.configuration = new Configuration(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.connections = new Connections(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.expenses = new Expenses(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.mappingOptions = new MappingOptions(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.sync = new Sync(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.syncStatus = new SyncStatus(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.transactionStatus = new TransactionStatus(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
