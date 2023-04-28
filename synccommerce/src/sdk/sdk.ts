/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { CompanyManagement } from "./companymanagement";
import { Configuration } from "./configuration";
import { Integrations } from "./integrations";
import * as shared from "./models/shared";
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
 * The API for Sync for Commerce. Sync for Commerce is an API and a set of supporting tools. It has been built to enable e-commerce, point of sale platforms to provide high-quality integrations with numerous accounting platform through standardized API, seamlessly transforming business sale's data into accounting artefacts.
 *
 * @remarks
 * [Read More...](https://docs.codat.io/sfc/overview)
 */
export class CodatSyncCommerce {
  /**
   * Create new and manage existing Sync for Commerce companies.
   */
  public companyManagement: CompanyManagement;
  /**
   * Expressively configure preferences for any given Sync for Commerce company.
   */
  public configuration: Configuration;
  /**
   * View useful information about codat's integrations.
   */
  public integrations: Integrations;
  /**
   * Initiate a sync of Sync for Commerce company data into their respective accounting software.
   */
  public sync: Sync;
  /**
   * Configure preferences for any given Sync for Commerce company using sync flow.
   */
  public syncFlowPreferences: SyncFlowPreferences;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.10.2";
  private _genVersion = "2.23.2";
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

    this.companyManagement = new CompanyManagement(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.configuration = new Configuration(
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

    this.sync = new Sync(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.syncFlowPreferences = new SyncFlowPreferences(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );
  }
}
