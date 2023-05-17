/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Companies } from "./companies";
import { Connections } from "./connections";
import { DataStatus } from "./datastatus";
import { Integrations } from "./integrations";
import * as shared from "./models/shared";
import { PushData } from "./pushdata";
import { RefreshData } from "./refreshdata";
import { Settings } from "./settings";
import { Webhooks } from "./webhooks";
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
 * Common API
 *
 * @remarks
 * An API for the common components of all of Codat's products.
 *
 * These end points cover creating and managing your companies, data connections, and integrations.
 *
 * [Read about the building blocks of Codat...](https://docs.codat.io/core-concepts/companies)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class CodatCommon {
  /**
   * Create and manage your Codat companies.
   */
  public companies: Companies;
  /**
   * Manage your companies' data connections.
   */
  public connections: Connections;
  /**
   * Understand the state of data within Codat.
   */
  public dataStatus: DataStatus;
  /**
   * View and manage your available integrations in Codat.
   */
  public integrations: Integrations;
  /**
   * View push options and get push statuses.
   */
  public pushData: PushData;
  /**
   * Queue pull operations to refresh data in Codat.
   */
  public refreshData: RefreshData;
  /**
   * Manage your Codat instance.
   */
  public settings: Settings;
  /**
   * Manage webhooks, rules and alerts.
   */
  public webhooks: Webhooks;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.17.0";
  private _genVersion = "2.29.0";
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

    this.companies = new Companies(
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

    this.dataStatus = new DataStatus(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.integrations = new Integrations(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.pushData = new PushData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.refreshData = new RefreshData(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.settings = new Settings(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.webhooks = new Webhooks(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
