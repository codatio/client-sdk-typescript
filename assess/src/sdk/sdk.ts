/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import { Categories } from "./categories";
import { DataIntegrity } from "./dataintegrity";
import { ExcelReports } from "./excelreports";
import * as shared from "./models/shared";
import { Reports } from "./reports";
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
 * Codat's financial insights API
 *
 * @remarks
 * Codat's Assess API enable you to make smarter credit decisions on your small business customers. Assess enriches your customer's accounting, commerce and banking data to surface actionable insights you didn't have before.
 *
 * [Read more...](https://www.codat.io/assess/)
 *
 * [See our OpenAPI spec](https://github.com/codatio/oas)
 */
export class CodatAssess {
  /**
   * Categorisation
   */
  public categories: Categories;
  /**
   * Data integrity is important
   */
  public dataIntegrity: DataIntegrity;
  /**
   * Downloadable reports
   */
  public excelReports: ExcelReports;
  /**
   * Data integrity is important
   */
  public reports: Reports;

  public _defaultClient: AxiosInstance;
  public _securityClient: AxiosInstance;
  public _serverURL: string;
  private _language = "typescript";
  private _sdkVersion = "0.12.0";
  private _genVersion = "2.20.1";
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

    this.categories = new Categories(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.dataIntegrity = new DataIntegrity(
      this._defaultClient,
      this._securityClient,
      this._serverURL,
      this._language,
      this._sdkVersion,
      this._genVersion
    );

    this.excelReports = new ExcelReports(
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
  }
}
