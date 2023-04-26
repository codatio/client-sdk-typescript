/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Configuration } from "./configuration";
import { Connections } from "./connections";
import { Expenses } from "./expenses";
import { MappingOptions } from "./mappingoptions";
import * as shared from "./models/shared";
import { Sync } from "./sync";
import { SyncStatus } from "./syncstatus";
import { TransactionStatus } from "./transactionstatus";
import axios from "axios";
import { AxiosInstance } from "axios";

/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = ["https://api.codat.io"] as const;

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
 * The API for Sync for Expenses.
 *
 * @remarks
 * Sync for Expenses is an API and a set of supporting tools. It has been built to enable corporate card and expense management platforms to provide high-quality integrations with multiple accounting platforms through a standardized API.
 *
 * [Read more...](https://docs.codat.io/sync-for-expenses/overview)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class CodatSyncExpenses {
  /**
   * Companies sync configuration.
   */
  public configuration: Configuration;
  /**
   * Create and manage partner expense connection.
   */
  public connections: Connections;
  /**
   * Create expense datasets and upload receipts.
   */
  public expenses: Expenses;
  /**
   * Mapping options for a companies expenses.
   */
  public mappingOptions: MappingOptions;
  /**
   * Triggering a new sync of expenses to accounting software.
   */
  public sync: Sync;
  /**
   * Check the status of ongoing or previous expense syncs.
   */
  public syncStatus: SyncStatus;
  /**
   * Retrieve the status of transactions within a sync.
   */
  public transactionStatus: TransactionStatus;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.12.0";
  private _genVersion = "2.22.0";
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
